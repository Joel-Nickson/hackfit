import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import programmer from "../assets/animations/programmer.svg";
import Landing from "../assets/logo.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col h-screen lg:flex-row-reverse items-center justify-around lg:justify-between bg-brochgreen text-gray-100"
    >
      <div className="flex justify-center items-center" id="back">
        <div className="z-10 text-[#FFFFFF] text-[7rem] md:text-[12rem] lg:text-[16rem]">
          Hack<span className="text-[#000000]">Fitx</span>
        </div>
      </div>
    </div>
  );
};

export default About;
