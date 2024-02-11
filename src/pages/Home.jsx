import About from "../components/About";
import { Certification } from "../components/Certification";
import { Contacts } from "../components/Contact";
import { Divider } from "../components/Divider";
import { Facilities } from "../components/Facilities";
import { HeroSection } from "../components/HeroSection";
import { IntroVideo } from "../components/IntroVideo";
import { Methodology } from "../components/Methodology";
import { Partnership } from "../components/Partnership";
import { Programs } from "../components/Programs";
import { Support } from "../components/Support";

export const Home = () => {
  return (
    <>
      <div className="w-100 max-w-[1100px] mx-auto px-0 lg:px-0">
        <HeroSection />
        <Divider />
        <IntroVideo />
        <Divider />
        <About />
        <Divider />
        <Facilities />
        <Divider />
        <Programs />
        <Divider />
        <Methodology />
        <Divider />
        <Partnership />
        <Divider />
        <Certification />
        <Divider />
        <Support />
        <Divider />
        <Contacts />
      </div>
    </>
  );
};
