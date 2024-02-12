// import { LazyLoadImage } from "react-lazy-load-image-component";

export const HeroSection = () => {
  return (
    <>
      <div className="relative  bg-cover bg-center my-5 transition duration-300 ease-in-out border border-[rgb(47,49,62)] rounded-lg px-2 py-10 sm:p-10 hero-bg">
        {/* <div className="overlay opacity-50"></div> */}

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <header className="flex gap-1 items-center">
          <div className="h-[30px] w-4[30px] overflow-hidden">
            <img src="./assets/logo.png" className="w-full h-full" alt="logo" />
          </div>
          <h1 className="text-white text-2xl font-bold">PrizaX</h1>
        </header>

        <div className=" lg:grid lg:grid-cols-10 mt-7 sm:mt-0 items-center">
          <div className="col-span-5">
            <h1 className="text-[32px] text-center lg:text-left animate-pulse sm:text-[56px] text-white font-light">
              Home <br /> Elevate with PrizaX
            </h1>
          </div>
          <div className="relative  mt-5 flex justify-center lg:h-[400px]  overflow-hidden delay-1000 animate- rounded-tr-0 rounded-lg  col-span-5">
            {/* <img
              src="./assets/hero-image.jpg"
              alt="Hero image"
              className="w-full h-full"
            /> */}
            {/* <LazyLoadImage
              alt="man with vision pro"
              src={"/assets/heroImage.png"}
              className="h-100 w-100 grayscale"
            /> */}
            {/* <div className="absolute galaxy lg:w-[450px]  top-0 left-[15%] lg:top-[0px] lg:left-[8%] opacity-75 ">
              <img
                src="/assets/galaxy.png"
                alt="galaxy"
                className="w-100 h-100  galaxy-animate"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
