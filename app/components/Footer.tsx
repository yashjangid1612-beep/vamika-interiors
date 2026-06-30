export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">
            VAMIKA INTERIORS
          </h2>

          <p className="text-gray-400 mt-4">
            Luxury Interior Design & Turnkey Solutions for Homes,
            Offices and Commercial Spaces.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Contact
          </h3>

          <p>📞 9928489482</p>
          <p className="mt-2">📧 yogeshjangir645@gmail.com</p>
          <p className="mt-2">
            Near Sara Medical Store,
            <br />
            Mochiwara Road,
            <br />
            Sikar, Rajasthan
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © 2026 Vamika Interiors. All Rights Reserved.
      </div>
    </footer>
  );
}