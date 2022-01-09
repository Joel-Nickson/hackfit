import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import programmer from "../assets/animations/programmer.svg";
import LandingImage from "../assets/logo.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col h-screen lg:flex-row-reverse items-center justify-around lg:justify-between bg-brochgreen text-gray-100"
    >
      <div className="relative flex justify-center items-center z-10" id="back">
        <img src={LandingImage} alt="Landingimage" />
      </div>
    </div>
  );
};

export default About;
