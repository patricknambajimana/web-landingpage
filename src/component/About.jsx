import { SiBookstack } from "react-icons/si";

const About = () => {
  return (
    <div className="mt-15 w-full" id="about">
      {/* About Heading Section */}
      <p className="text-2xl text-primary-400 text-center md:text-left px-4 mt-10">About us</p>

      <div className="flex flex-col lg:flex-row px-4 py-4 m-6 md:m-12 text-3xl text-center items-center lg:items-start gap-6">
        <h2 className="text-4xl md:text-5xl p-4 font-bold border-r-2 lg:ml-20 text-left">
          we offer creative environment that is suit business
        </h2>
        <div className="text-left p-3 m-5">
          <p className="text-xl md:text-2xl mr-0 md:mr-20 md:ml-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eligendi, impedit iusto temporibus deleniti culpa. Debitis magnam, cupiditate sunt id saepe vitae! Et sunt nisi non omnis adipisci ab consectetur.
          </p>
          <a href="#" className="text-xl md:text-2xl capitalize text-primary-400 font-extrabold block mt-4 md:ml-10">
            more about us
          </a>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center px-4">
        <h3 className="text-2xl md:text-3xl capitalize font-bold">your benefit</h3>
        <h2 className="text-3xl md:text-5xl m-4 capitalize font-extrabold">why choose us</h2>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nihil recusandae fugit voluptate et atque adipisci laboriosam.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:m-40  px-4">
        <div className="text-center">
          <div className="border border-neutral-200 p-10 m-6 bg-primary-600/20">
            <SiBookstack className="text-6xl md:text-8xl bg-primary-600 rounded-full p-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold p-4 capitalize">Creative space</h2>
            <span className="text-base md:text-xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div className="border border-neutral-200 p-10 m-6 bg-primary-400/20">
            <SiBookstack className="text-6xl md:text-8xl bg-primary-600 rounded-full p-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold p-4 capitalize">high speed wifi</h2>
            <span className="text-base md:text-xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div className="border border-neutral-200 p-10 m-6 bg-primary-400/20">
            <SiBookstack className="text-6xl md:text-8xl bg-primary-600 rounded-full p-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold p-4 capitalize">parking area</h2>
            <span className="text-base md:text-xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg"
            alt="Office Space"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="text-center ">
          <div className="border border-neutral-200 p-10 m-6 bg-primary-400/20">
            <SiBookstack className="text-6xl md:text-8xl bg-primary-600 rounded-full p-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold p-4 capitalize">24/7 access</h2>
            <span className="text-base md:text-xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div className="border border-neutral-200 p-10 m-6 bg-primary-400/20">
            <SiBookstack className="text-6xl md:text-8xl bg-primary-600 rounded-full p-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold p-4 capitalize">great location</h2>
            <span className="text-base md:text-xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div className="border border-neutral-200 p-10 m-6 bg-primary-400/20">
            <SiBookstack className="text-6xl md:text-8xl bg-primary-600 rounded-full p-4 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-extrabold p-4 capitalize">outdoor space</h2>
            <span className="text-base md:text-xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative text-center text-white mt-20">
        <img
          src="https://images.pexels.com/photos/8068652/pexels-photo-8068652.jpeg"
          alt="Mission"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center px-6">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 capitalize">
            <strong className="text-primary-400">our</strong> mission
          </h1>
          <p className="text-lg md:text-xl font-bold max-w-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea quaerat veritatis expedita earum, quidem beatae saepe nobis molestias excepturi? Tempora necessitatibus quo veniam quas error dicta officiis quidem non! Ullam impedit, reprehenderit nostrum nemo consectetur culpa iusto ipsa sint dolore magnam ea velit illum harum incidunt repellendus. Omnis numquam amet earum?
          </p>
          <div className=" grid grid-cols-2 items-center gap-4 mt-20">
            <div className="border-4 border-primary-400 w-30 rounded-md"></div>
            <div className="border-4 border-white w-30 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
