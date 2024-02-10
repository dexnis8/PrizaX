// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Programs = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          prizaX
        </h3>
        <div className="my-10 grid grid-cols-10 items-center gap-10">
          <div className="col-span-6 pr-20">
            <h4 className="text-4xl leading-[48px]">
              Programs <br /> Elevate Your Skills
            </h4>
            <h5 className="my-3 text-xl font-semibold">Our Programs</h5>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 mt-1 pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-base font-medium">
                    Foundational Digital Literacy Program (Basic Level)
                  </h5>
                  <p className="text-sm">
                    Equip individuals with practical digital skills, covering
                    essential computer proficiency, cybersecurity awareness, and
                    more, enhancing daily life and professional efficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-1 pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-base font-medium">
                    Advanced Digital Prficiency Program (Intermediate Level):
                  </h5>
                  <p className="text-sm">
                    Enhance digital skills for improved communication,
                    operational efficiency, and advanced cybersecurity
                    awareness, leading to elevated workforce capacities.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-1 pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-base font-medium">
                    Strategic Digital Leadership Program (Advanced Level):
                  </h5>
                  <p className="text-sm">
                    Develop strategic leaders with a profound understanding of
                    digital technologies, leading to transformative outcomes in
                    both professional and societal contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 border border-[rgb(47,49,62)] text-white rounded-lg p-7">
            <div>
              <BulbIcon />
            </div>

            <h4 className="text-lg font-medium mt-2 mb-3">
              Specialized Courses:
            </h4>
            <p className="text-base ">
              Explore our specialized courses designed for practical elevations:
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <h5 className="font-medium">Software Development Courses:</h5>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  {" "}
                  From coding essentials to application development, enhancing
                  workplace efficiency.
                </li>
                <li>
                  {" "}
                  Recommendation: Include images of secure software development
                  environments, emphasizing robust coding practices.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h5 className="font-medium">Cybersecurity Courses:</h5>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  {" "}
                  Practical skills to secure digital assets and contribute to a
                  safer online environment.
                </li>
                <li>
                  {" "}
                  Recommendation: Use images representing advanced cybersecurity
                  practices and simulations.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h5 className="font-medium">
                Deeptech and Artificial Intelligence Courses:
              </h5>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  {" "}
                  Unlocking the potential of cutting-edge technologies for
                  tangible results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
