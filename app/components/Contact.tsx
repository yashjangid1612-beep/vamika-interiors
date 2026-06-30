export default function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-yellow-500">Us</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Let's transform your dream space into reality.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 text-xl font-semibold">📞 Phone</h3>
            <p className="mt-3">9928489482</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 text-xl font-semibold">📧 Email</h3>
            <p className="mt-3">yogeshjangir645@gmail.com</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 text-xl font-semibold">📍 Address</h3>
            <p className="mt-3">
              Near Sara Medical Store,
              <br />
              Mochiwara Road,
              <br />
              Sikar, Rajasthan – 332001
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}