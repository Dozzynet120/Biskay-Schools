"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function AdmissionSection() {
return (
<section className="py-20 bg-green-50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center md:items-start gap-10">

      {/* ---- LEFT SIDE (TEXT) ---- */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-wine mb-4">
          Admission Now Open
        </h2>

        <p className="text-green-900 text-lg max-w-2xl mb-8">
          Enrollment into Biskay Schools for the{" "}
          <span className="font-semibold">2025 / 2026 Academic Session</span>{" "}
          is now in progress. We welcome children into Crèche, Nursery, Primary,
          and Secondary classes.
        </p>

        <Link
          href="/pre-register"
          className="bg-wine text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-900 transition"
        >
          Apply Now
        </Link>
      </div>

      {/* ---- RIGHT SIDE (IMAGE) ---- */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/images/kk.jpg" // Update this path to your actual image
          alt="Admission Students"
          width={380}
          height={380}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

    </div>
  </div>
</section>


);
}