export default function Hero({ image }) {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <img
        src={image}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
        <h2 className="text-white text-2xl md:text-5xl font-bold mb-4">
          The Best WorkSpace in Kigali
        </h2>

        <p className="text-white text-2xl md:text-3xl font-bold leading-snug mb-4 ">
          <span className="text-primary-800 text-7xl">Professional,</span> <span className="text-7xl">Creative,<br />
          Flexible, Scalability </span><span className="text-primary-800 text-7xl">Work Space</span>
        </p>

        <p className="text-white text-left md:text-xl max-w-3xl mb-6 ">
          Discover the ideal workspace with us. Work smart, not hard in our fully equipped office spaces. 
          Elevate your business with flexible solutions tailored your way. Find your perfect space today!
        </p>

        <button className=" bg-primary-800 text-white px-20 py-4 rounded-md text-3xl font-extrabold hover:bg-primary-600 transition">
          Explore
        </button>
      </div>
    </div>
  );
}
