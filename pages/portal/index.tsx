// pages/portal/index.tsx
"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PortalHome() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-green-50 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-wine">School Portal</h1>
          <p className="text-green-900 mt-3">Access students' results, invoices, classwork and more.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Link href="/portal/results" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="font-bold text-green-900">Results</h3>
              <p className="text-sm mt-2">Enter, edit and download student results</p>
            </Link>

            <Link href="/portal/invoices" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="font-bold text-green-900">Invoices</h3>
              <p className="text-sm mt-2">Create and download school fees invoices</p>
            </Link>

            <Link href="/portal/classwork" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="font-bold text-green-900">Classwork & Homework</h3>
              <p className="text-sm mt-2">Upload classwork/homework and collect submissions</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
