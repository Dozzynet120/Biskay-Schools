"use client";

import React from "react";

export default function AdmissionForm() {
  return (
    <section className="min-h-screen py-16 bg-green-50 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Biskay School Application Form  
          <span className="block text-lg mt-1">2025 / 2026 Academic Session</span>
        </h1>

        <p className="text-gray-700 mb-6">
          Please make sure your email address is valid. 
          You will receive a confirmation email to begin your application.
        </p>

        <label className="block text-sm font-semibold mb-2">Enter Email Address Below</label>
        <input 
          type="email"
          placeholder="Enter email here"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <label className="block text-sm font-semibold mb-2">Upload Passport Photo</label>
        <input 
          type="file" 
          accept="image/*"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition">
          Proceed
        </button>

        <p className="text-center mt-4 text-gray-600">
          Biskay School - Online Application
        </p>
      </div>
    </section>
  );
}
