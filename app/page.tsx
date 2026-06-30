import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-yellow-500 uppercase tracking-[5px]">
            Premium Interior Design
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            VAMIKA <span className="text-yellow-500">INTERIORS</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Transforming homes into beautiful, functional, and luxurious spaces
            with modern interior design and premium craftsmanship.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
              Get Free Consultation
            </button>

            <button className="border border-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </section>

      <Services />
<Projects />
<About />
<WhyChooseUs />
<Testimonials />
<Contact />
<Footer />

<WhatsApp />
    </main>
  );
}