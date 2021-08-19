import Image from "next/image";

import signin from "../assets/screenshots/signin.png";
import homescreen from "../assets/screenshots/homescreen.png";
import recipeinfo from "../assets/screenshots/recipeinfo.png";

function PersonalProjects() {
	return (
		<div
			id="personal projects"
			className="px-12 py-10 bg-gray-900 text-gray-100 font-poppins"
		>
			<h1 className="mt-10 font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-widest">
				PERSONAL PROJECTS
			</h1>

			{/* Recipe App */}
			<h1 className="mt-16 text-xl sm:text-2xl md:text-3xl text-center tracking-widest font-medium">
				Recipe App
			</h1>
			<div className="md:mx-20 mt-10 flex justify-between">
				<Image src={signin} quality={100} />
				<Image src={homescreen} quality={100} />
				<Image src={recipeinfo} quality={100} />
			</div>
		</div>
	);
}

export default PersonalProjects;
