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
    title: "Modern Living Room",
    location: "Jaipur",
    category: "Living Room",
    image: "/projects/living2.jpg",
  },
  {
    title: "Modern Bedroom",
    location: "Sikar",
    category: "Bedroom",
    image: "/projects/bedroom-after.jpg",
  },
  {
    title: "Luxury Bedroom",
    location: "Jaipur",
    category: "Bedroom",
    image: "/projects/bedroom2.jpg",
  },
  {
    title: "Modular Kitchen",
    location: "Sikar",
    category: "Kitchen",
    image: "/projects/kitchen-after.jpg",
  },
  {
    title: "Premium Kitchen",
    location: "Jaipur",
    category: "Kitchen",
    image: "/projects/kitchen2.jpg",
  },
  {
    title: "Hotel Reception",
    location: "Khatushyam Ji",
    category: "Hotel Interior",
    image: "/projects/reception-after.jpg",
  },
];

const categories = [...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 px-6">
      <h2 className="text-5xl font-bold text-center">Our Premium Projects</h2>

      {!selectedCategory ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer rounded-2xl bg-gray-800 p-8 text-center hover:bg-yellow-500 hover:text-black transition"
            >
              <div className="text-5xl mb-3">📁</div>
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="text-sm opacity-70 mt-2">View Projects</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-8 mb-8 px-5 py-2 rounded-full bg-white text-black"
          >
            ← Back to Categories
          </button>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}