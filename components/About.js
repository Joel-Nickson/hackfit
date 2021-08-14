import { useState, useEffect } from "react";

import ReactTypingEffect from "react-typing-effect";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/animation.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
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
		<div className="flex flex-col pb-20 min-h-screen lg:flex-row-reverse items-center lg:justify-around justify-center">
			<div className="w-auto h-auto">
				<Lottie
					options={defaultOptions}
					height={width < 640 ? width - 90 : 550}
					width={width < 640 ? width - 90 : 550}
				/>
			</div>
			<div className="max-w-md text-center">
				<h1 class="mb-5 text-4xl sm:text-5xl font-serif font-semibold tracking-wide">
					Hello there 👋 !
				</h1>
				<h1 class="mb-5 text-2xl sm:text-3xl font-light tracking-widest">
					I'm Nino Joy.
				</h1>
				<p className="text-xl sm:text-2xl font-extralight tracking-widest font-mono">
					React Native Developer . UI/UX Designer
				</p>
			</div>
		</div>
	);
};

export default About;
