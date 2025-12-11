"use client";
import React from "react";

const parents = [
  {
    name: "Mrs. Eniola",
    comment:
      "Biskay Schools has been a blessing to my children. Their confidence, academics and character have greatly improved. I strongly recommend this school for every child.",
    image: "/images/Mrs Eniola.jpg",
  },
  {
    name: "Mrs. Mustapha",
    comment:
      "The teachers are caring and highly professional. My daughter now loves reading and participating in school activities—something we struggled with before.",
    image: "/images/Mrs Mustapha.jpg",
  },
  {
    name: "Mrs. Ijeoma",
    comment:
      "The environment is safe and conducive, and the club activities make learning fun. My son enjoys swimming and French classes so much!",
    image: "/images/Mrs Ijeoma.jpg",
  },
];

export default function Parent() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side Image */}
        <div className="w-full">
          <img
            src="/parents/Bis2.jpg"
            alt="Parents and students smiling"
            className="rounded-3xl shadow-xl w-full object-cover border-4 border-white"
          />
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-lg text-green-800 mb-8 max-w-lg">
            We are proud to have earned the trust of parents who believe in our
            commitment to raising excellent, disciplined and confident pupils.
          </p>

          <div className="space-y-8">
            {parents.map((parent, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-5 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={parent.image}
                  alt={parent.name}
                  className="w-16 h-16 object-cover rounded-full border-4 border-green-700 shadow-md"
                />
                <div>
                  <h4 className="text-xl font-semibold text-green-900">
                    {parent.name}
                  </h4>
                  <p className="text-green-800 leading-relaxed text-sm">
                    "{parent.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
