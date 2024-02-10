// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Methodology = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          prizaX
        </h3>

        <div>
          <h2 className="text-center text-4xl w-[35%] leading-[56px] mx-auto">
            Methodology - Flexibility in Learning
          </h2>
          <div className="flex justify-center">
            {" "}
            <button className="text-center py-2 px-10 transition-all bg-purple-100 text-black rounded-full my-3 hover:bg-purple-800 hover:text-white">
              Training Methodology
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="border rounded-lg p-5 pt-10">
              <div className="image">
                {/* <img src="" alt="" /> */}
                <BulbIcon />
              </div>
              <p className=" font-medium text-base w-[40%] ">
                Strategic Blended Learning:
              </p>
              <ul className="list-disc pl-4 pb-10 text-sm ">
                <li>
                  A flexible blend of online modules and on-site sessions
                  tailored for securityfocused professionals.
                </li>
                <li>
                  {" "}
                  Recommendation: Use images of virtual and physical learning
                  spaces, emphasizing secure training environments
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-5 pt-10">
              <div className="image">
                {/* <img src="" alt="" /> */}
                <BulbIcon />
              </div>
              <p className=" font-medium text-base w-[40%] ">
                Experienced Practitioners:
              </p>
              <ul className="list-disc pl-4 pb-10 text-sm ">
                <li>
                  Instructors with a background in practical implementation,
                  ensuring relevance to actual work and daily life.
                </li>
                <li>
                  {" "}
                  Recommendation: Consider videos with testimonials from
                  experienced practitioners in the security domain.
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-5 pt-10">
              <div className="image">
                {/* <img src="" alt="" /> */}
                <BulbIcon />
              </div>
              <p className=" font-medium text-base w-[40%] ">
                Customized Learning Options:
              </p>
              <ul className="list-disc pl-4 pb-10 text-sm ">
                <li>
                  Tailored training paths to meet specific professional and
                  personal goals, ensuring practical skill acquisition.
                </li>
                <li>
                  {" "}
                  Recommendation: Include customizable visual elements
                  representing tailored learning paths, with a focus on security
                  contexts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
