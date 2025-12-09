"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      // CHECK IF USER IS ADMIN
      const ref = doc(db, "users", userCred.user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        alert("No user record found.");
        return;
      }

      if (snap.data().role !== "admin") {
        alert("Access denied! Only admins can login here.");
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid login credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded shadow-xl w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold text-center text-green-900 mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-900 text-white p-3 rounded font-bold"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
