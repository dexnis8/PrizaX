// import React from 'react'

// import { BulbIcon } from "./icons/BulbIcon";

export const Methodology = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] px-2 py-10 sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>

        <div>
          <h2 className="text-center text-2xl sm:text-4xl  sm:w-[50%] lg:w-[35%] leading-[56px] mx-auto">
            Methodology - Flexibility in Learning
          </h2>
          <div className="flex justify-center">
            {" "}
            <button className="text-center py-2 px-10 transition-all bg-purple-100 text-black rounded-full my-3 hover:bg-purple-800 hover:text-white">
              Training Methodology
            </button>
          </div>

          <div className="flex flex-col  sm:grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="border  border-[rgb(47,49,62)] rounded-lg overflow-hidden">
              <div className="rounded-lg oveflow-hidden h-[200px] mb-4 ">
                <img
                  src={`./assets/met1.webp`}
                  className="w-full h-full hover:scale-[1.2] duration-300 transition-all"
                  alt=""
                />
              </div>
              <div className="p-5">
                <p className=" font-medium text-base w-[40%] ">
                  Strategic Blended Learning:
                </p>
                <ul className=" text-base ">
                  <li>
                    A flexible blend of online modules and on-site sessions
                    tailored for security focused professionals.
                  </li>
                </ul>
              </div>
            </div>

            <div className="border  border-[rgb(47,49,62)] rounded-lg overflow-hidden">
              <div className="rounded-lg oveflow-hidden h-[200px] mb-4 ">
                <img
                  src={`./assets/met2.jpeg`}
                  className="w-full h-full hover:scale-[1.2] duration-300 transition-all"
                  alt=""
                />
              </div>
              <div className="p-5">
                <p className=" font-medium text-base w-[40%] ">
                  Experienced Practitioners:
                </p>
                <ul className="text-base ">
                  <li>
                    Instructors with a background in practical implementation,
                    ensuring relevance to actual work and daily life.
                  </li>
                </ul>
              </div>
            </div>

            <div className="border  border-[rgb(47,49,62)] rounded-lg overflow-hidden">
              <div className="rounded-lg oveflow-hidden h-[200px] mb-4 ">
                <img
                  src={`./assets/met3.jpeg`}
                  className="w-full h-full hover:scale-[1.2] duration-300 transition-all"
                  alt=""
                />
              </div>
              <div className="p-5">
                <p className=" font-medium text-base w-[40%] ">
                  Customized Learning Options:
                </p>
                <ul className=" text-base ">
                  <li>
                    Tailored training paths to meet specific professional and
                    personal goals, ensuring practical skill acquisition.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
