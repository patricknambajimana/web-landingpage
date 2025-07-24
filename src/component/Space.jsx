const Space = ({ image, description, title, link}) => {
  return (
    <div className="w-full max-w-md mx-auto" id="space">
      <div className="border border-neutral-200  rounded-b-xl shadow-lg text-center  capitalize bg-white">
        <img src={image} alt="space" className="w-full h-100 object-cover " />
        
        <h2 className="mt-5 text-3xl text-primary-500 font-bold  ">{title}</h2>
        <div className="text-center p-0.5 mt-5  md:ml-35 lg:w-25  bg-primary-400 lg:ml-39"></div>
        <p className="mt-5 text-gray-700">{description}</p>

        {link && (
          <a
            href="#"
            className="inline-block mt-4 text-xl text-primary-500 font-bold hover:underline"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

export default Space;
