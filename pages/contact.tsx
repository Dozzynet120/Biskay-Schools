import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-wine mb-4">Contact Us</h1>
          <p className="text-green-900 text-lg max-w-2xl mx-auto">
            We are always here to assist you. Reach out for inquiries about 
            admission, academics, or any general questions about Biskay Schools.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          
          {/* Phone */}
          <div className="bg-green-50 p-8 rounded-xl shadow text-center">
            <FaPhone className="text-wine text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-wine">Phone</h3>
            <p className="text-green-900 mt-2 text-lg">+234 8033250241</p>
          </div>

          {/* Email */}
          <div className="bg-green-50 p-8 rounded-xl shadow text-center">
            <FaEnvelope className="text-wine text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-wine">Email</h3>
            <p className="text-green-900 mt-2 text-lg">
              info@biskayschools.com
            </p>
          </div>

          {/* Address */}
          <div className="bg-green-50 p-8 rounded-xl shadow text-center">
            <FaMapMarkerAlt className="text-wine text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-wine">Address</h3>
            <p className="text-green-900 mt-2 text-lg">
              Onosa, Ibeju-Lekki, Lagos State, Nigeria
            </p>
          </div>

        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-wine mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.909802404104!2d3.68100!3d6.47200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfa62bf123%3A0xaaaaaaaaaaaaaa!2sOnosa%20Ibeju-Lekki%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-wine text-center mb-6">
            Send Us a Message
          </h2>

          <form className="bg-green-50 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label className="block text-green-900 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded border border-green-300"
              />
            </div>

            <div>
              <label className="block text-green-900 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded border border-green-300"
              />
            </div>

            <div>
              <label className="block text-green-900 font-medium mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded border border-green-300"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-wine text-white px-6 py-3 rounded-lg hover:bg-wine/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-wine py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white">Ready to Enroll?</h2>
          <p className="text-white/90 mt-3 text-lg">
            Start your child's educational journey at Biskay Schools today.
          </p>

          <a
            href="/pre-register"
            className="mt-6 inline-block bg-white text-wine font-semibold px-8 py-3 rounded-lg hover:bg-green-100 transition"
          >
            Start Admission
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
