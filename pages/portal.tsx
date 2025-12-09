import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PortalPage() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-green-50 min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-wine mb-6">Student Portal</h1>
          <p className="text-green-900 mb-6">
            Students can log in to access their results, assignments, and course materials.
          </p>
          <button className="bg-wine text-white px-6 py-3 rounded-lg hover:bg-wine/80 transition">
            Login to Portal
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
