// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Support = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] px-2 py-10 sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>

        <div>
          <h2 className="text-center text-2xl sm:text-4xl sm:w-[50%] lg:w-[39%] leading-[48px] mx-auto">
            Support - Continuous Learning And Guidance
          </h2>
          <div className="flex justify-center">
            {" "}
            <button className="text-center py-2 px-10  text-white font-semibold text-base">
              Continuous Learning and Support
            </button>
          </div>

          <div className="flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="border border-purple-800 hover:translate-y-2 transition-all duration-300 cursor-pointer rounded-lg flex gap-7 h-[300px] sm:w-[300px] flex-col justify-center text-center p-10">
              <div className="flex justify-center">
                <BulbIcon />
              </div>

              <p className="text-base">
                {" "}
                Ongoing practical modules to keep security focused individuals
                and workforces updated on the latest technological advancements.
              </p>
            </div>

            <div className="border border-purple-800 hover:translate-y-2 transition-all duration-300 cursor-pointer rounded-lg flex gap-7 h-[300px] sm:w-[300px] flex-col justify-center text-center p-10">
              <div className="flex justify-center">
                <BulbIcon />
              </div>

              <p className="text-base">
                {" "}
                A dedicated support team provides assistance and guidance
                post-training, ensuring continuous improvement and efficiency.
              </p>
            </div>

            <div className="border border-purple-800 hover:translate-y-2 transition-all duration-300 cursor-pointer rounded-lg flex gap-7 h-[300px] sm:w-[300px] flex-col justify-center text-center p-10">
              <div className="flex justify-center">
                <BulbIcon />
              </div>

              <p className="text-base">
                {" "}
                Recommendation: Include visuals of continuous learning modules
                and a support team focused on security aspects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
