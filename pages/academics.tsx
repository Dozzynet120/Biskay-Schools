import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AcademicsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-green-50 relative">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-wine mb-6">
            Our Academic Programs
          </h1>
          <p className="text-green-900 text-lg md:text-xl max-w-3xl mx-auto">
            Biskay Schools offers a balanced curriculum combining core academic subjects 
            with digital literacy, practical skills, and character development to prepare students for the future.
          </p>
        </div>
        <img
          src="/Nursery/nurs1.jpg"
          alt="Academic Programs"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </section>

      {/* Core Subjects, Digital Skills, Extracurricular */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-green-50 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold text-wine mb-4">Core Subjects</h2>
              <ul className="text-green-900 text-lg list-disc list-inside space-y-1">
                <li>Mathematics</li>
                <li>English Language</li>
                <li>Science</li>
                <li>Social Studies</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold text-wine mb-4">Digital Skills</h2>
              <ul className="text-green-900 text-lg list-disc list-inside space-y-1">
                <li>Computer Programming</li>
                <li>Web Development</li>
                <li>Graphics Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold text-wine mb-4">Extracurricular Activities</h2>
              <ul className="text-green-900 text-lg list-disc list-inside space-y-1">
                <li>Sports & Athletics</li>
                <li>Music & Arts</li>
                <li>Clubs & Societies</li>
                <li>Competitions & Olympiads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nursery Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/Nursery/nurs1.jpg"
              alt="Nursery Class"
              className="rounded-xl shadow-lg mb-6"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-wine mb-4">Nursery School</h2>
            <p className="text-green-900 mb-4">
              Our Nursery program focuses on building a strong foundation for young learners aged 2-5 years. 
              We emphasize play-based learning, social skills, language development, and emotional growth.
            </p>
            <p className="text-green-900 mb-4">
              Activities include storytelling, creative arts, music, basic numeracy, and early literacy skills. 
              Our caring teachers nurture curiosity and confidence in a safe, stimulating environment.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-wine mb-4">Primary School</h2>
            <p className="text-green-900 mb-4">
              Our Primary program builds on foundational knowledge and introduces core subjects in greater depth. 
              Students learn Mathematics, English, Science, Social Studies, and ICT through interactive and engaging lessons.
            </p>
            <p className="text-green-900 mb-4">
              Co-curricular activities, including sports, arts, and clubs, are integrated into the curriculum to develop well-rounded individuals. 
              Critical thinking, teamwork, and problem-solving skills are emphasized.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/primary/pri1.jpg"
              alt="Primary Class"
              className="rounded-xl shadow-lg mb-6"
            />
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/primary/pri2.jpg"
              alt="Secondary Class"
              className="rounded-xl shadow-lg mb-6"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-wine mb-4">Secondary School</h2>
            <p className="text-green-900 mb-4">
              Our Secondary program prepares students for national and international exams while fostering independent learning, leadership, and innovation. 
              The curriculum includes advanced Mathematics, Sciences, Languages, ICT, and elective subjects.
            </p>
            <p className="text-green-900 mb-4">
              Students participate in research projects, competitions, and community service programs to develop practical skills and social responsibility. 
              Guidance and counseling support personal and academic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Enrol Your Child Today
          </h2>
          <p className="text-green-900 mb-8">
            Begin your child's journey at Biskay Schools by enrolling in our Nursery, Primary, or Secondary programs. 
            Our dedicated teachers ensure quality education in a safe, stimulating environment.
          </p>
          <a
            href="/pre-register"
            className="bg-wine text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-900 transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
