import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        What Our Clients Say
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            “Vamika Interiors transformed my home beautifully. Highly recommended!”
          </p>
          <h4 className="mt-4 font-semibold text-gray-900">
            — Rahul Sharma
          </h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            “Excellent design sense and professional work. Loved it!”
          </p>
          <h4 className="mt-4 font-semibold text-gray-900">
            — Anjali Mehta
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;