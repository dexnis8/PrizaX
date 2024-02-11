import ReactPlayer from "react-player";
export const IntroVideo = () => {
  return (
    <>
      {" "}
      <div className="w-fit border-[rgb(47,49,62)] shadow mx-auto  border rounded-lg overflow-hidden bg-purple-800 h-fit md:h-[500px]">
        <ReactPlayer
          url="./assets/intro-video.mp4"
          width="100%"
          height="100%"
          controls={true}
          // playing={true}
          playsinline
          muted={true}
          loop={true}
        />
      </div>
    </>
  );
};
