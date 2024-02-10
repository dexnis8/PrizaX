// import React from 'react'

import { BulbIcon } from "./icons/BulbIcon";

export const Contacts = () => {
  return (
    <>
      <div className="border text-white  rounded-lg border-[rgb(47,49,62)] p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          prizaX
        </h3>
        <div className="my-10 grid grid-cols-10 items-center">
          <div className="col-span-5 pr-20">
            <h4 className="text-4xl leading-[48px]">
              Contact - Start Your Transformation
            </h4>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex gap-3 mt-1 pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-medium">Contact Us</h5>
                  <p className="text-sm">
                    Ready to elevate practical excellence in the digital age
                    with a security-focused approach? Contact PrizaX today!
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-1 pr-10">
                <div>
                  <BulbIcon />
                </div>
                <div>
                  {/* <h5 className="mb-1 text-base font-medium">
                    Strategic Digital Leadership Program (Advanced Level):
                  </h5> */}
                  <p className="text-sm">
                    At PrizaX, our strategic partnerships keep us at the
                    forefront of excellence, ensuring that you receive the most
                    advanced and relevant training with a strong focus on
                    security. Join us on this transformative journey!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5  grid grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <>
                <div
                  key={item}
                  className="border border-[rgb(47,49,62)] px-3 py-2 flex gap-4 items-center  rounded-lg"
                >
                  <div className="h-[70px] w-[70px] flex justify-center items-center  rounded-full bg-white">
                    <img
                      src="./assets/userID.png"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-sm">Oladeji Ayotunde</h6>
                    <p className="text-xs">Partner | prizaX</p>
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
