"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PreRegister() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email");
      return;
    }
    setLoading(true);

    // Redirect to /admission page with email as query param
    router.push(`/admission?email=${encodeURIComponent(email)}`);
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-green-50">
        <div className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-xl text-center">
          <h1 className="text-4xl font-bold text-wine mb-6">
            Welcome to Biskay School — Start Your Application
          </h1>

          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <label className="font-semibold block mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-wine text-white font-bold text-lg p-4 rounded-lg hover:bg-green-900 transition"
            >
              {loading ? "Continuing..." : "Continue Application"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
