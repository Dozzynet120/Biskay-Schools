"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // get query params
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db, storage } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Admission() {
const searchParams = useSearchParams();
const initialEmail = searchParams.get("email") || "";

const [email, setEmail] = useState(initialEmail);
const [loading, setLoading] = useState(false);

useEffect(() => {
setEmail(initialEmail); // pre-fill if email is passed
}, [initialEmail]);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setLoading(true);
const form = new FormData(e.currentTarget);

try {
  const passport = form.get("passport") as File;
  if (!passport || passport.size === 0) {
    alert("Please upload a passport photograph.");
    setLoading(false);
    return;
  }

  // Upload passport image to Firebase Storage
  const fileRef = ref(storage, `passports/${Date.now()}-${passport.name}`);
  await uploadBytes(fileRef, passport);
  const passportUrl = await getDownloadURL(fileRef);

  // Add application data to Firestore
  await addDoc(collection(db, "applications"), {
    fullName: form.get("fullName"),
    email: form.get("email"),
    phone: form.get("phone"),
    dob: form.get("dob"),
    classApplying: form.get("classApplying"),
    address: form.get("address"),
    passport: passportUrl,
    submittedAt: new Date().toISOString(),
  });

  alert("Application submitted successfully!");
  e.currentTarget.reset();
} catch (error) {
  console.error("Error:", error);
  alert("Error submitting application. Try again.");
} finally {
  setLoading(false);
}


};

return (
<>
<Navbar />
<section className="py-20 bg-green-50">
<div className="max-w-4xl mx-auto bg-white shadow-xl p-10 rounded-xl">
<h1 className="text-4xl font-bold text-center text-wine mb-6">
Biskay Schools Admission Form
</h1>
<p className="text-center text-green-900 mb-10">
2025 / 2026 Academic Session
</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            name="fullName"
            required
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            name="phone"
            required
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="font-semibold">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">Class Applying To</label>
            <select
              name="classApplying"
              required
              className="w-full p-3 border rounded-lg mt-2"
            >
              <option value="">Choose Class</option>
              <option>KG 1</option>
              <option>KG 2</option>
              <option>Nursery 1</option>
              <option>Nursery 2</option>
              <option>Primary 1</option>
              <option>Primary 2</option>
              <option>Primary 3</option>
              <option>Primary 4</option>
              <option>Primary 5</option>
              <option>JSS 1</option>
              <option>JSS 2</option>
              <option>JSS 3</option>
              <option>SS 1</option>
              <option>SS 2</option>
              <option>SS 3</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-semibold">Home Address</label>
          <textarea
            name="address"
            rows={3}
            required
            className="w-full p-3 border rounded-lg mt-2"
          ></textarea>
        </div>

        <div>
          <label className="font-semibold">Upload Passport Photograph</label>
          <input
            type="file"
            required
            name="passport"
            accept="image/*"
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-wine text-white font-bold text-lg p-4 rounded-lg mt-4 hover:bg-green-900 transition"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  </section>
  <Footer />
</>


);
}