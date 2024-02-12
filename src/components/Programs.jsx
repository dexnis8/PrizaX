// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Programs = () => {
  const data = [
    {
      id: 1,
      title: "Software Development Courses:",
      lists: [
        `From coding essentials to application development, enhancing workplace efficiency.`,
      ],
    },
    {
      id: 2,
      title: `Cybersecurity Courses:`,
      lists: [
        `Practical skills to secure digital assets and contribute to a safer online environment.`,
      ],
    },
    {
      id: 3,
      title: `Deeptech and Artificial Intelligence Courses:`,
      lists: [
        ` Unlocking the potential of cutting-edge technologies for tangible results`,
        //         ` Recommendation: Integrate a video
        // background of AI-related animations or
        // data streams with a security-focused
        // narrative`,
      ],
    },
  ];
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] px-2 py-10 sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>
        <div className="my-10  flex flex-col gap-10">
          <div className="">
            <h4 className="text-2xl sm:text-4xl leading-[48px]">
              Programs <br /> Elevate Your Skills
            </h4>
            <h5 className="my-3 text-xl font-semibold">Our Programs</h5>
            <div className=" flex-col flex sm:grid grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex flex-col gap-3 mt-1">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-base font-medium">
                    Foundational Digital Literacy Program (Basic Level)
                  </h5>
                  <p className="text-base">
                    Equip individuals with practical digital skills, covering
                    essential computer proficiency, cybersecurity awareness, and
                    more, enhancing daily life and professional efficiency.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-1">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-base font-medium">
                    Advanced Digital Prficiency Program (Intermediate Level):
                  </h5>
                  <p className="text-base">
                    Enhance digital skills for improved communication,
                    operational efficiency, and advanced cybersecurity
                    awareness, leading to elevated workforce capacities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-1">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-base font-medium">
                    Strategic Digital Leadership Program (Advanced Level):
                  </h5>
                  <p className="text-base">
                    Develop strategic leaders with a profound understanding of
                    digital technologies, leading to transformative outcomes in
                    both professional and societal contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:border border-[rgb(47,49,62)] text-white rounded-lg sm:p-7">
            <div className="mb-5">
              <h4 className="text-2xl font-medium mt-2 mb-3">
                Specialized Courses:
              </h4>
              <p className="text-base ">
                Explore our specialized courses designed for practical
                elevations:
              </p>
            </div>
            {/* here */}
            <div className="flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
              {data.map((item) => (
                <>
                  <div
                    key={item}
                    className="border border-[rgb(47,49,62)] rounded-lg overflow-hidden duration-300 transition-transform"
                  >
                    <div className="rounded-lg oveflow-hidden h-[200px] mb-4 ">
                      <img
                        src={`./assets/p${item.id}.${
                          item.id !== 3 ? "jpeg" : "png"
                        }`}
                        className="w-full h-full hover:scale-[1.2] duration-300 transition-all"
                        alt=""
                      />
                      {/* <BulbIcon /> */}
                    </div>
                    <div className="p-5">
                      <p className=" font-medium text-base ">{item.title}</p>
                      <ul className=" text-base mt-1 ">
                        {item.lists.map((list, index) => (
                          <li key={index}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </div>

            {/* ends */}
          </div>
        </div>
      </div>
    </>
  );
};
