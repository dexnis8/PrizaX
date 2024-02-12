// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Partnership = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] px-2 py-10 sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>
        <div className=" items-center justify-between gap-20 flex flex-col lg:grid lg:grid-cols-10 my-10">
          <div className="col-span-5 rounded-lg overflow-hidden   ">
            <img
              src="./assets/partner.jpeg"
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>

          <div className="col-span-5 sm:pr-10 flex flex-col gap-5">
            <h4 className="text-2xl sm:text-4xl">
              Partnerships - At The Forefront Of Excellence
            </h4>
            <div className="flex sm:flex-row flex-col gap-2">
              <div>
                {/* <img src="" alt="" /> */}
                <BulbIcon />
              </div>
              <div>
                <h5 className="text-base font-medium my-3">
                  Strategic Partnerships
                </h5>
                <p className="text-base text-purple-50">
                  PrizaX collaborates with renowned technology companies &
                  international training platforms, ensuring our programs are
                  always at the forefront of advancing brilliance. Our
                  partnerships guarantee access to the latest technologies,
                  tools, & industry insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
