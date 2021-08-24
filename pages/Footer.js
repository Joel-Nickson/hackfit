import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";

import heart from "../assets/icons/heart.svg";

const Footer = () => {
	return (
		<div
			id="footer"
			className=" bg-gray-900 p-5 flex items-center justify-center text-gray-100"
		>
			<footer>
				<p className="font-light font-poppins tracking-wider text-sm flex items-center">
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
			</footer>
		</div>
	);
};

export default Footer;
