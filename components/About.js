import { useState, useEffect } from "react";
import Image from "next/image";

import ReactTypingEffect from "react-typing-effect";
import Lottie from "react-lottie";
import blogging from "../assets/lotties/blogging.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: blogging,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const About = () => {
	const [width, setWidth] = useState(0);
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div
			id="about"
			className="flex flex-col pb-20 min-h-screen lg:flex-row-reverse items-center lg:justify-between justify-center bg-gray-900 text-white"
		>
			<div className="">
				<Lottie
					options={defaultOptions}
					// height={width < 640 ? width - 200 : 550}
					width={width < 640 ? width - 15 : 700}
				/>
			</div>
			<div className="text-center mt-40 lg:mt-0 lg:text-left lg:ml-32">
				<h1 className="mb-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-wider font-poppins">
					Hello 👋 !
				</h1>
				<h1 className="mb-5 text-2xl lg:text-3xl font-poppins font-thin tracking-widest">
					I'm Nino Joy.
				</h1>
				<div>
					<ReactTypingEffect
						speed="40"
						eraseSpeed="40"
						eraseDelay="1500"
						typingDelay="500"
						text={["React Native Developer", "UI/UX Designer"]}
						displayTextRenderer={(text, i) => {
							return (
								<p className="text-xl sm:text-2xl tracking-widest font-mono font-thin">
									{text}
								</p>
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
