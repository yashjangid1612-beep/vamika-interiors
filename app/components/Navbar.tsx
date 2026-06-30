export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-yellow-500">
            VAMIKA INTERIORS
          </h1>
          <p className="text-xs text-gray-400">
            Crafting Elegant Spaces
          </p>
        </div>

        <ul className="hidden md:flex gap-8 text-white">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Services</li>
          <li className="hover:text-yellow-500 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>

        <a
          href="tel:9928489482"
          className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}