"use client";

import React, { useState } from "react";

const projects = [
  {
    title: "Luxury Living Room",
    location: "Sikar",
    category: "Living Room",
    image: "/projects/living-after.jpg",
  },
  {
    title: "Modern Bedroom Design",
    location: "Sikar",
    category: "Bedroom",
    image: "/projects/bedroom-after.jpg",
  },
  {
    title: "Modular Kitchen",
    location: "Sikar",
    category: "Kitchen",
    image: "/projects/kitchen-after.jpg",
  },
  {
    title: "Hotel interior",
    location: "Khatushyam Ji",
    category: "reception",
    image: "/projects/reception-after.jpg",
  },
];

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Hotel interior"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 px-6">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center">
        Our Premium Projects
      </h2>

      <p className="text-center text-gray-400 mt-3">
        Elegant interiors crafted with precision & style
      </p>

      {/* Filters */}
      <div className="flex justify-center gap-3 mt-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              active === cat
                ? "bg-white text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">
                {project.location}
              </p>

              <span className="inline-block mt-2 text-xs px-3 py-1 bg-white text-black rounded-full">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold">
          Want a similar luxury interior?
        </h3>
        <p className="text-gray-400 mt-2">
          Let’s design your dream space together
        </p>

        <button className="mt-5 px-7 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
          Get Free Consultation
        </button>
      </div>

    </section>
  );
}