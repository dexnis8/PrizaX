// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Facilities = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] px-2 py-10 sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>
        <div className=" items-center justify-between gap-20 flex flex-col-reverse lg:grid grid-cols-10 my-10">
          <div className="col-span-5 sm:pr-10 flex flex-col gap-5">
            <h4 className="text-2xl sm:text-4xl">
              Facilities - Virtual & Physical Learning Spaces
            </h4>
            <div className="flex-col sm:flex-row flex gap-2">
              <div>
                {/* <img src="" alt="" /> */}
                <BulbIcon />
              </div>
              <div>
                <h5 className="text-base font-medium my-3">
                  Virtual and Physical Learning Spaces
                </h5>
                <p className="text-base text-purple-50">
                  PrizaX brings learning to your preferred secure environment.
                  Our virtual platforms & on-site sessions offer the best of
                  both worlds, ensuring a seamless and impactful training
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 rounded-lg overflow-hidden  ">
            <img
              src="./assets/facilities.jpeg"
              className="w-[100%] h-[100%] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
