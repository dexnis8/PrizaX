// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Contacts = () => {
  const data = [
    {
      id: 1,
      name: "Lt.col(Rtd) Louis Ntabshwa",
      role: "Partner | PrizaX",
    },

    {
      id: 2,
      name: "Yan Kwizera",
      role: "Partner | PrizaX",
    },

    {
      id: 3,
      name: "Sergey Irshnikov",
      role: "Consultant | Directorate General Of Immigration and Emigration",
    },

    {
      id: 4,
      name: "Aimable Rukundo",
      role: "Chief Digital Innovations | RSwitch",
    },

    {
      id: 5,
      name: "J.Damascene Habanabashaka",
      role: "Instructor | Rwanda Coding Academy",
    },

    {
      id: 6,
      name: "Stanley Mwizerwa",
      role: "Instructor | Rwanda Coding Academy",
    },

    {
      id: 7,
      name: "Donatien Masengesho",
      role: "Senior Software Engineer | Bank of Kigali",
    },

    {
      id: 8,
      name: "Didier Uwantwali Zigama",
      role: "Senior Software Developer | Justice Sector",
    },

    {
      id: 9,
      name: "Christian Iradukunda",
      role: "Senior Software Developer | Rockefeller Philanthropy Advisors",
    },

    {
      id: 10,
      name: "Jean Pierre Niyodusenga",
      role: "Lecturer | AUCA",
    },

    {
      id: 11,
      name: "Alleluya Iradakunda",
      role: "Principal DevOps Engineer | RISA",
    },

    {
      id: 12,
      name: "Kimon Hars",
      role: "Directorate | The Gym Software Training Program",
    },
  ];
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] px-2 py-10 sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>
        <div className="my-10 w-full flex flex-col gap-10 lg:gap-0 lg:grid lg:grid-cols-10 items-center">
          <div className="col-span-5 sm:pr-20">
            <h4 className="text-2xl sm:text-4xl leading-[48px]">
              Contact - Start Your Transformation
            </h4>
            <div className="flex w-full  flex-col gap-3 mt-5">
              <div className="flex  flex-col sm:flex-row  sm:gap-3 mt-1 sm:pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-medium">Contact Us</h5>
                  <p className="text-base w-full">
                    Ready to elevate practical excellence in the digital age
                    with a security-focused approach? Contact PrizaX today!
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-3 mt-1 sm:pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div className="w-full">
                  {/* <h5 className="mb-1 text-base font-medium">
                    Strategic Digital Leadership Program (Advanced Level):
                  </h5> */}
                  <p className="text-base w-full">
                    At PrizaX, our strategic partnerships keep us at the
                    forefront of excellence, ensuring that you receive the most
                    advanced and relevant training with a strong focus on
                    security. Join us on this transformative journey!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 flex flex-col   sm:grid grid-cols-2 gap-2">
            {data.map((item) => (
              <>
                <div
                  key={item.id}
                  className="border border-[rgb(47,49,62)] px-3 py-2 flex gap-4 items-center  rounded-lg"
                >
                  <div className="h-[70px] flex justify-center items-center w-[70px] overflow-hidden  rounded-full border">
                    <img
                      src={`./assets/c${item.id}.jpeg`}
                      className="w-[100%] h-[100%]"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h6 className="text-base">{item.name}</h6>
                    <p className="text-xs">{item.role}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
