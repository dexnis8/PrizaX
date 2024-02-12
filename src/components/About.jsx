// import { BulbIcon } from "./icons/BulbIcon";

const About = () => {
  const data = [
    {
      id: 1,
      title: "Strategic Learning Paths:",
      lists: [
        `Our courses seamlessly integrate 
         online and on-site training, offering a  
         flexible approach to meet the unique 
         needs of security-focused 
         professionals.`,
        // ` Recommendation: Use a high-quality
        // image of a cutting-edge, secure
        // command center or cybersecurity hub.`,
      ],
    },
    {
      id: 2,
      title: `Results-Driven Instructors:`,
      lists: [
        ` Our seasoned instructors are devoted to 
imparting skills that lead to tangible 
outcomes, enhancing both professional 
and personal efficiency.`,
        //         `Recommendation: Include an avatar of a
        // futuristic tech persona with security centric elements like digital armor.`,
      ],
    },
    {
      id: 3,
      title: `Holistic 
Empowerment:`,
      lists: [
        ` PrizaX's diverse courses not only elevate 
workforce capabilities but also empower 
citizens, contributing to a digitally skilled 
and efficient society.`,
        //         ` Recommendation: Integrate a video
        // background of AI-related animations or
        // data streams with a security-focused
        // narrative`,
      ],
    },
  ];
  return (
    <>
      <div className="border  rounded-lg border-[rgb(47,49,62)] px-2 py-10  sm:p-10">
        <h3 className="text-lg font-bold flex justify-end text-white">
          PrizaX
        </h3>

        <div className="flex flex-col gap-5 text-white">
          <h3 className="text-center text-4xl">About Us</h3>
          <p className="text-center text-base sm:text-lg sm:w-[80%] mx-auto text-purple-50">
            PrizaX is your strategic ally in cultivating practical excellence
            for the digital era. Our mission is to empower individuals and
            workforces with a dynamic blend of online and on-site training,
            delivering hands-on skills that elevate efficiency and drive
            positive change in the ever-evolving digital landscape.{" "}
          </p>

          <h4 className="text-center text-2xl font-semibold">Why PrizaX?</h4>

          <div className="flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((item) => (
              <>
                <div
                  key={item}
                  className="border  border-[rgb(47,49,62)] rounded-lg overflow-hidden duration-300 transition-transform"
                >
                  <div className="rounded-lg oveflow-hidden h-[200px] mb-4 ">
                    <img
                      src={`./assets/abt${item.id}.jpeg`}
                      className="w-full h-full hover:scale-[1.2] duration-300 transition-all"
                      alt=""
                    />
                    {/* <BulbIcon /> */}
                  </div>
                  <div className="p-5">
                    <p className=" font-medium text-base w-[40%] ">
                      {item.title}
                    </p>
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
        </div>
      </div>
    </>
  );
};

export default About;
