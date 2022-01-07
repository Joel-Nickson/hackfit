import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";

import heart from "../assets/icons/heart.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="md:px-24 flex flex-col md:flex-row p-5 font-light font-poppins text-sm tracking-wider bg-gray-900 items-center justify-between text-gray-400"
    >
      <p className="flex items-center">
        Made with
        <span className="mx-1.5">
          <Image src={heart} width={18} height={18} />
        </span>
        using
        {
          <ReactTypingEffect
            cursorClassName=""
            speed="80"
            eraseSpeed="100"
            eraseDelay="1500"
            typingDelay="500"
            text={["React", "Next.js", "TailwindCSS"]}
            className="ml-1"
          />
        }
      </p>
      <p className="pt-2 sm:pt-0">© FISAT</p>
    </div>
  );
};

export default Footer;
