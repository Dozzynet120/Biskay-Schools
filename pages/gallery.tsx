import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  "/images/Bis.jpg",
  "/images/event1.jpg",
  "/images/event2.jpg",
  "/images/event3.jpg",
  "/images/event11.jpg",
  "/images/event10.jpg",
  "/images/Bis6.jpg",
  "/images/event7.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Primary/pri1.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
          Our Gallery
        </h1>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            See Life at Biskay Schools
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Biskay Schools, we believe in creating memorable learning moments.
            Our gallery highlights exciting classroom activities, outdoor learning,
            sports, competitions, cultural days, and everyday smiles that define
            our nurturing school community.
          </p>
        </div>
      </section>

      {/* Placard Style Info Box */}
      <section className="py-10 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-xl rounded-xl p-6 text-center border-t-8 border-green-700">
            <h3 className="text-xl font-bold text-wine">Modern Classrooms</h3>
            <p className="text-gray-600 mt-2">
              Equipped for interactive and digital learning.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 text-center border-t-8 border-green-700">
            <h3 className="text-xl font-bold text-wine">Sports & Activities</h3>
            <p className="text-gray-600 mt-2">
              We nurture athleticism and teamwork through competitions and training.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 text-center border-t-8 border-green-700">
            <h3 className="text-xl font-bold text-wine">Creative Learning</h3>
            <p className="text-gray-600 mt-2">
              Art, music, science experiments & cultural exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-8">Photo Highlights</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Life Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-wine text-center mb-10">School Life</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src="/Nursery/nurs1.jpg" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src="/Nursery/nurs2.jpg" className="w-full h-80 object-cover" />
            </div>
          </div>

          <p className="text-center text-gray-700 mt-6 text-lg">
            A vibrant, joyful community where children learn, grow, and shine every day.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
            Special Events & Celebrations
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/images/kk.jpg" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/images/kkk.jpg" className="w-full h-80 object-cover" />
            </div>
          </div>

          <p className="text-center text-gray-700 mt-6 text-lg">
            From cultural days to award ceremonies, every event is a celebration of excellence.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-wine text-center mb-10">
            Our Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="/primary/lab.webp" className="rounded-lg h-48 w-full object-cover" />
              <h3 className="mt-4 text-lg font-semibold">Science Labs</h3>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="/Primary/pri2.jpg" className="rounded-lg h-48 w-full object-cover" />
              <h3 className="mt-4 text-lg font-semibold">ICT Centre</h3>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="/Primary/play.jpeg" className="rounded-lg h-48 w-full object-cover" />
              <h3 className="mt-4 text-lg font-semibold">Sports Arena</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
