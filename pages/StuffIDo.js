import Image from "next/image";

import StackLogo from "../components/StackLogo";
import react from "../assets/stacks/react.svg";
import nextjs from "../assets/stacks/next-js.svg";
import firebase from "../assets/stacks/firebase.svg";
import adobexd from "../assets/stacks/adobe-xd.svg";
import figma from "../assets/stacks/figma.svg";

import appdev from "../assets/animations/app-dev.svg";
import uiux from "../assets/animations/ui-ux.svg";

function StuffIDo() {
  return (
    <div className="px-12 pt-10 bg-gray-900 font-poppins" id="about">
      <h1 className="mt-10 text-gray-100 font-pixeboy text-3xl sm:text-4xl md:text-5xl text-center tracking-widest">
        About HackFit
      </h1>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Research</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Prototype</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Build</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StuffIDo;
