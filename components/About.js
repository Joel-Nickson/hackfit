import { useState, useEffect } from "react";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

import programmer from "../assets/animations/programmer.svg";

const About = () => {
	const [height, setHeight] = useState(0);
	useEffect(() => {
		setHeight(window.innerHeight);
	}, []);

	return (
		<div
			id="about"
			className="flex flex-col sm:min-h-[90vh] min-h-[78vh] max-h-screen lg:flex-row-reverse items-center justify-around lg:justify-between bg-gray-900 text-gray-100"
		>
			<div className="lg:mr-20 min-w-0 max-w-sm md:min-w-md md:max-w-xl">
				<Image
					src={programmer}
					width={900}
					height={900}
					quality={1}
					priority={true}
				/>
			</div>

			<div className="text-center mt-14 lg:mt-0 lg:text-left lg:ml-32">
				<h1 className="mb-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-wider font-poppins">
					Hello 👋 !
				</h1>
				<h1 className="mb-5 text-2xl lg:text-3xl font-poppins font-light tracking-widest">
					I'm Nino Joy.
				</h1>
				<div>
					<ReactTypingEffect
						cursorClassName="text-2xl"
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
