import StackLogo from "./StackLogo";
import react from "../assets/stacks/react.svg";
import nextjs from "../assets/stacks/next-js.svg";
import firebase from "../assets/stacks/firebase.svg";

function Portfolio() {
	return (
		<div
			className="px-10 py-10 bg-gray-100 min-h-full text-gray-800"
			id="portfolio"
		>
			<p className=" font-extrabold font-mono text-3xl text-center">
				Stacks I use
			</p>
			<div className="flex flex-row mt-10 space-x-10 items-center justify-center">
				<StackLogo logo={react} />
				<StackLogo logo={nextjs} />
				<StackLogo logo={firebase} />
			</div>
		</div>
	);
}

export default Portfolio;
