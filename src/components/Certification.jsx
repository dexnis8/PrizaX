// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Certification = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          prizaX
        </h3>

        <div>
          <h2 className="text-center text-4xl w-[35%] leading-[48px] mx-auto">
            Certification Validate Your Proficiency
          </h2>
          <div className="flex justify-center">
            {" "}
            <button className="text-center py-2 px-10  text-white font-semibold text-base">
              Certification Programs
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="border border-purple-800 hover:translate-y-2 transition-all duration-300 cursor-pointer rounded-full flex gap-7 h-[300px] w-[300px] flex-col justify-center text-center p-10">
              <div className="flex justify-center">
                <BulbIcon />
              </div>

              <p>
                {" "}
                A flexible blend of online modules and on-site sessions tailored
                for security focused professionals.
              </p>
            </div>

            <div className="border border-purple-800 hover:translate-y-2 transition-all duration-300 cursor-pointer rounded-full flex gap-7 h-[300px] w-[300px] flex-col justify-center text-center p-10">
              <div className="flex justify-center">
                <BulbIcon />
              </div>

              <p>
                {" "}
                A flexible blend of online modules and on-site sessions tailored
                for security focused professionals.
              </p>
            </div>

            <div className="border border-purple-800 hover:translate-y-2 transition-all duration-300 cursor-pointer rounded-full flex gap-7 h-[300px] w-[300px] flex-col justify-center text-center p-10">
              <div className="flex justify-center">
                <BulbIcon />
              </div>

              <p>
                {" "}
                A flexible blend of online modules and on-site sessions tailored
                for security focused professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
