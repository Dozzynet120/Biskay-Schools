"use client";
import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-300" />
            Location
          </h3>
          <p className="text-gray-200 leading-loose">
            Biskay Schools,<br />
            Onosa, Ibeju-Lekki,<br />
            Lagos, Nigeria.
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaClock className="text-green-300" />
            Opening Hours
          </h3>
          <p className="text-gray-200 leading-loose">
            Monday – Friday<br />
            8:00 AM – 5:00 PM
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaPhoneAlt className="text-green-300" />
            Contact Us
          </h3>
          <p className="text-gray-200 leading-loose flex">
            <FaPhoneAlt className="mt-1 mr-2" /> +234 8068325150
          </p>
          <p className="text-gray-200 leading-loose flex">
            <FaPhoneAlt className="mt-1 mr-2" /> +234 8033250241
          </p>
          <p className="text-gray-200 leading-loose flex items-center">
            <FaEnvelope className="mr-2" /> info@biskayschools.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mt-3">
            <FaFacebookF className="hover:text-green-300 cursor-pointer" size={20} />
            <FaInstagram className="hover:text-green-300 cursor-pointer" size={20} />
            <FaTwitter className="hover:text-green-300 cursor-pointer" size={20} />
            <FaYoutube className="hover:text-green-300 cursor-pointer" size={22} />
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-300">
        <div className="space-x-4 mb-4">
          <a href="/about" className="hover:text-white">About Us</a>
          <a href="/admission" className="hover:text-white">Admission</a>
          <a href="/academics" className="hover:text-white">Curriculum</a>
          <a href="/contact" className="hover:text-white">Contact Us</a>
          <a href="/portal" className="hover:text-white">Portal</a>
        </div>

        <p className="mt-4">
          © {new Date().getFullYear()} All Rights Reserved. Biskay Schools.
        </p>
      </div>
    </footer>
  );
}
