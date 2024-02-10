import { LazyLoadImage } from "react-lazy-load-image-component";

export const HeroSection = () => {
  return (
    <>
      <div className="my-5 transition duration-300 ease-in-out hover:bg-purple-800 border border-[rgb(47,49,62)] rounded-lg p-10 pb-0 custom-gradient">
        <header>
          <h1 className="text-white text-2xl font-bold">prizaX</h1>
        </header>

        <div className="grid grid-cols-10 items-center">
          <div className="col-span-5">
            <h1 className="text-[32px] sm:text-[56px] text-white font-light">
              Home <br /> Elevate with PrizaX
            </h1>
          </div>
          <div className="relative  mt-5 flex justify-center  col-span-5  bg-[url('/assets/metrix 1.png')]">
            <LazyLoadImage
              alt="man with vision pro"
              src={"/assets/heroImage.png"}
              className="h-100 w-100 grayscale"
            />
            <div className="absolute galaxy lg:w-[450px]  top-0 left-[15%] lg:top-[0px] lg:left-[8%] opacity-75 ">
              <img
                src="/assets/galaxy.png"
                alt="galaxy"
                className="w-100 h-100  galaxy-animate"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
