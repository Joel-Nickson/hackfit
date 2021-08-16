import StackLogo from "./StackLogo";
import react from "../assets/stacks/react.svg";
import nextjs from "../assets/stacks/next-js.svg";
import firebase from "../assets/stacks/firebase.svg";

function Portfolio() {
	return (
		<div
			className="px-12 py-10 bg-gray-900 min-h-full text-gray-100 font-poppins"
			id="portfolio"
		>
			<h1 className="font-bold text-3xl sm:text-4xl text-center tracking-widest">
				Stuff I Know
			</h1>

			<h1 className="mt-20 font-normal text-xl sm:text-2xl text-center tracking-widest">
				Web and Native Apps
			</h1>
			<div className="lg:flex lg:items-center lg:justify-center">
				<div className="flex space-x-10 lg:space-x-20 items-center justify-center mt-12">
					<StackLogo logo={react} />
					<StackLogo logo={nextjs} />
					<StackLogo logo={firebase} />
				</div>

				<div className="mt-16 font-poppins font-thin space-y-5 lg:ml-44">
					<p>⭐️ &nbsp; Web Development with React</p>
					<p>⭐️ &nbsp; Native App Developement with React Native</p>
					<p>⭐️ &nbsp; Next.js implementation with React</p>
					<p>⭐️ &nbsp; Firebase Authentication</p>
					<p>⭐️ &nbsp; Cloud Firestore</p>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
