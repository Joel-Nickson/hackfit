import Socials from "../components/Socials";

import github from "../assets/stacks/github.svg";
import linkedin from "../assets/stacks/linkedin.svg";
import google from "../assets/stacks/google.svg";
import twitter from "../assets/stacks/twitter.svg";
import instagram from "../assets/stacks/instagram.svg";

function Contact() {
  return (
    <div
      id="get in touch"
      className="px-12 pt-1 pb-10 bg-gray-900 text-gray-100 font-Pixeboy"
    >
      {/* <h1 className="mt-10 font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-widest">
				GET IN TOUCH
			</h1> */}
      <div className="flex mt-12 items-center justify-center space-x-3 md:space-x-4 lg:space-x-6">
        <Socials
          logo={github}
          link="https://github.com/nino-joy"
          bg="#181717"
        />
        <Socials
          logo={linkedin}
          link="https://linkedin.com/in/nino-joy"
          bg="#0A66C2"
        />
        <Socials
          logo={google}
          link="https://mail.google.com/mail/?view=cm&fs=1&to=ninojoy1234@gmail.com"
          bg="#4285F4"
        />
        <Socials
          logo={twitter}
          link="https://twitter.com/nino__joy"
          bg="#1DA1F2"
        />
        <Socials
          logo={instagram}
          link="https://www.instagram.com/nino_joy/"
          bg="#E4405F"
        />
      </div>
    </div>
  );
}

export default Contact;
