"use client";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://hips.hearstapps.com/hmg-prod/images/9371e1d1-e28a-4162-af2d-618fd76811a4.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase font-taviraj">
          Elevating Your Travel Experience
        </h1>
        <p className="text-2xl  max-w-3xl mb-6 font-mulish">
          Luxury Chauffeured Services Across 300+ Cities Worldwide
        </p>
        <p className="text-lg md:text-xl max-w-3xl mb-8 font-mulish">
          Let ZSI Marketing redefine your travel with our premium limousine and
          town car services, available in over 300 cities globally. Whether for
          business, special occasions, or leisure, we provide a seamless and
          sophisticated journey tailored to your needs.
        </p>
        <a
          href="#services"
          className="px-6 py-3 bg-[#ca8600] hover:bg-[#b57a00] text-white font-bold rounded-md transition"
        >
          Book Your Ride
        </a>
      </div>
    </section>
  );
};

export default Hero;
