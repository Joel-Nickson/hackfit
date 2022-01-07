import Image from "next/image";

import StackLogo from "../components/StackLogo";
import react from "../assets/stacks/react.svg";
import nextjs from "../assets/stacks/next-js.svg";
import firebase from "../assets/stacks/firebase.svg";
import adobexd from "../assets/stacks/adobe-xd.svg";
import figma from "../assets/stacks/figma.svg";

import appdev from "../assets/animations/app-dev.svg";
import uiux from "../assets/animations/ui-ux.svg";

function Speakers() {
  return (
    <div
      className="px-12 pt-10 bg-gray-900 text-gray-100 font-poppins"
      id="Speakers"
    >
      <h1 className="mt-10 font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-widest">
        Speakers
      </h1>
    </div>
  );
}

export default Speakers;
