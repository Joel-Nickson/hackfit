import Image from "next/image";

import signin from "../assets/screenshots/signin.png";
import homescreen from "../assets/screenshots/homescreen.png";
import recipeinfo from "../assets/screenshots/recipeinfo.png";

function PersonalProjects() {
	return (
		<div
			id="personal projects"
			className="px-12 pt-10 pb-10 bg-gray-900 text-gray-100 font-poppins"
		>
			<h1 className="mt-10 font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-widest">
				PERSONAL PROJECTS
			</h1>

			{/* Recipe App */}
			<h1 className="mt-16 text-xl sm:text-2xl md:text-3xl text-center tracking-widest font-medium">
				📌 Recipe App (WORK IN PROGRESS)
			</h1>
			<div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-20 justify-center items-center">
				<div className="md:mx-20 flex flex-col justify-between items-center lg:col-span-2 lg:scale-75">
					<div className="flex flex-row">
						<Image src={signin} quality={100} />
						<Image src={homescreen} quality={100} />
						<Image src={recipeinfo} quality={100} />
					</div>
					<a
						href="https://github.com/nino-joy/recipeapp"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-10 py-2 px-4 lg:text-lg flex justify-center items-center bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 active:bg-gray-500 active:translate-y-0.5 transform transition rounded-md text-sm font-medium tracking-wide"
					>
						GITHUB REPO 🔗
					</a>
				</div>

				<div className="mt-16 lg:mt-0 font-light space-y-5 tracking-widest sm:text-lg lg:col-span-1 lg:pr-12">
					<p>
						⭐️ &nbsp; Native iOS/Android app build with React Native to search
						and discover recipes
					</p>
					<p>⭐️ &nbsp; Authentication with Google Firebase</p>
					<p>⭐️ &nbsp; NativeBase component library</p>
					<p>⭐️ &nbsp; Recipe data collected from Spoonacular API</p>
					{/* <p>⭐️ &nbsp; Cloud Firestore</p> */}
				</div>
			</div>
		</div>
	);
}

export default PersonalProjects;
