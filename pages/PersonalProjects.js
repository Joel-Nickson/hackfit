import Image from "next/image";

import signin from "../assets/screenshots/recipeapp/signin.png";
import homescreen from "../assets/screenshots/recipeapp/homescreen.png";
import recipeinfo from "../assets/screenshots/recipeapp/recipeinfo.png";

import signinfisat from "../assets/screenshots/fisat/signin.png";
import homefisat from "../assets/screenshots/fisat/home.png";
import drawerfisat from "../assets/screenshots/fisat/drawer.png";

import PersonalProjectsStack from "../components/PersonalProjectsStack";
import firebase from "../assets/stacks/firebase.svg";
import adobexd from "../assets/stacks/adobe-xd.svg";
import react from "../assets/stacks/react.svg";
import nativebase from "../assets/stacks/nativebase.svg";
import nextjs from "../assets/stacks/next-js.svg";
import tailwind from "../assets/stacks/tailwind.svg";
import vercel from "../assets/stacks/vercel.svg";

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
			<div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-3 lg:gap-20 justify-center items-center">
				<div className="md:mx-20 flex flex-col justify-between items-center lg:col-span-2">
					<div className="flex flex-row w-full justify-between">
						<Image src={signin} quality={100} />
						<Image src={homescreen} quality={100} />
						<Image src={recipeinfo} quality={100} />
					</div>
					<div className="mt-5 px-2 flex flex-row justify-between items-center min-w-full">
						<a
							href="https://github.com/nino-joy/recipeapp"
							target="_blank"
							rel="noopener noreferrer"
							className="py-2 px-4 bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 active:bg-gray-500 active:translate-y-0.5 transform transition rounded-md text-sm font-medium tracking-wide"
						>
							FILE 🔗
						</a>
						<div className="flex md:space-x-5 space-x-2">
							<PersonalProjectsStack
								logo={adobexd}
								link="https://www.adobe.com/in/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjw3_KIBhA2EiwAaAAlipwyHsSl0Uzwhau-eiMRBIAvnwtxckkgfoNiDLbqx6ZC4HbbeWTuIxoCUVAQAvD_BwE:G:s&s_kwcid=AL!3085!3!526748867462!e!!g!!adobe%20xd!1641846448!65452677551"
								size={32}
							/>
							<PersonalProjectsStack
								logo={react}
								link="https://reactnative.dev"
								size={32}
							/>
							<PersonalProjectsStack
								logo={nativebase}
								link="https://nativebase.io"
								size={32}
							/>
							<PersonalProjectsStack
								logo={firebase}
								link="https://firebase.google.com"
								size={32}
							/>
						</div>
					</div>
				</div>

				<div className="mt-10 lg:mt-0 md:mx-20 lg:mx-0 font-light space-y-5 tracking-widest sm:text-lg lg:col-span-1 lg:pr-12">
					<p>⭐️ &nbsp; UI/UX designed with Adobe XD</p>
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

			{/* UI/UX for FISAT Student Portal*/}
			<h1 className="md:mt-24 mt-16 text-xl sm:text-2xl md:text-3xl text-center tracking-widest font-medium">
				📌 UI/UX for FISAT Student Portal
			</h1>
			<div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-3 lg:gap-20 justify-center items-center">
				<div className="md:px-20 flex flex-col justify-between items-center lg:col-span-2">
					<div className="flex flex-row justify-between w-full">
						<Image src={signinfisat} quality={100} />
						<Image src={homefisat} quality={100} />
						<Image src={drawerfisat} quality={100} />
					</div>
					<div className="mt-4 px-2 flex flex-row justify-between items-center min-w-full">
						<a
							href="https://xd.adobe.com/view/a6964b22-ba80-48b2-b85a-b1e87cfff7b3-f3c5/"
							target="_blank"
							rel="noopener noreferrer"
							className="py-2 px-4 bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 active:bg-gray-500 active:translate-y-0.5 transform transition rounded-md text-sm font-medium tracking-wide"
						>
							FILE 🔗
						</a>
						<div>
							<PersonalProjectsStack
								logo={adobexd}
								link="https://www.adobe.com/in/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjw3_KIBhA2EiwAaAAlipwyHsSl0Uzwhau-eiMRBIAvnwtxckkgfoNiDLbqx6ZC4HbbeWTuIxoCUVAQAvD_BwE:G:s&s_kwcid=AL!3085!3!526748867462!e!!g!!adobe%20xd!1641846448!65452677551"
								size={32}
							/>
						</div>
					</div>
				</div>

				<div className="mt-10 lg:mt-0 md:mx-20 lg:mx-0 font-light space-y-5 tracking-widest sm:text-lg lg:col-span-1 lg:pr-12">
					<p>⭐️ &nbsp; UI/UX designed with Adobe XD</p>
					<p>⭐️ &nbsp; Adequate color schemes</p>
					<p>⭐️ &nbsp; Subtle animations</p>
				</div>
			</div>

			{/* Personal Portfolio */}
			<h1 className="mt-16 text-xl sm:text-2xl md:text-3xl text-center tracking-widest font-medium">
				📌 Personal Portfolio
			</h1>
			<div className="mt-10 lg:mt-14 flex flex-col justify-center items-center">
				<div className="md:mx-20 font-light space-y-5 tracking-widest sm:text-lg">
					<p>⭐️ &nbsp; Fully Responsive website made with React and Next.js</p>
					<p>
						⭐️ &nbsp; TailwindCSS utility library for responsive and minimal UI
					</p>
					<p>⭐️ &nbsp; Hosted on Vercel by Next.js</p>
				</div>

				<div className="md:mx-20 mt-10 flex flex-row justify-between items-center w-full md:w-auto">
					<a
						href="https://github.com/nino-joy/nino-joy.github.io"
						target="_blank"
						rel="noopener noreferrer"
						className="py-2 px-4 bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 active:bg-gray-500 active:translate-y-0.5 transform transition rounded-md text-sm font-medium tracking-wide"
					>
						FILE 🔗
					</a>
					<div className="md:ml-20 flex md:space-x-5 space-x-2">
						<PersonalProjectsStack
							logo={react}
							link="https://reactjs.org/"
							size={32}
						/>
						<PersonalProjectsStack
							logo={nextjs}
							link="https://nextjs.org"
							size={32}
						/>
						<PersonalProjectsStack
							logo={tailwind}
							link="https://tailwindcss.com"
							size={32}
						/>
						<PersonalProjectsStack
							logo={vercel}
							link="https://vercel.com"
							size={32}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PersonalProjects;
