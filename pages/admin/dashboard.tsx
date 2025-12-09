"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/admin/login");
        return;
      }

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists() && snap.data().role === "admin") {
        setAdmin(snap.data());
      } else {
        router.push("/admin/login");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-center mt-20">Checking access...</p>;

  return (
    <div className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold text-green-900 mb-6">
        Welcome Admin 👨‍💼
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link href="/admin/students">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Manage Students</h2>
          </div>
        </Link>

        <Link href="/admin/teachers">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Manage Teachers</h2>
          </div>
        </Link>

        <Link href="/admin/parents">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Manage Parents</h2>
          </div>
        </Link>

        <Link href="/admin/applications">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Admission Applications</h2>
          </div>
        </Link>

        <Link href="/admin/invoices">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Generate Fees Invoice</h2>
          </div>
        </Link>

        <Link href="/admin/newsletters">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Upload Newsletter</h2>
          </div>
        </Link>

        <Link href="/admin/results">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Upload Results</h2>
          </div>
        </Link>

        <Link href="/admin/classwork">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Create Classwork</h2>
          </div>
        </Link>

        <Link href="/admin/homework">
          <div className="p-6 bg-white shadow rounded-xl hover:bg-green-100 cursor-pointer">
            <h2 className="text-xl font-bold">Create Homework</h2>
          </div>
        </Link>

      </div>
    </div>
  );
}
