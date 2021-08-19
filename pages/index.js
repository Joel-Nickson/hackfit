import Head from "next/head";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PersonalProjects from "../components/PersonalProjects";
import StuffIDo from "../components/StuffIDo";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Nino Joy | Portfolio</title>
			</Head>

			{/* Header */}
			<Header />

			{/* About */}
			<About />

			{/* Stuff I Do */}
			<StuffIDo />

			{/* Personal Projects */}
			<PersonalProjects />

			{/* Footer */}
			<Footer />
		</div>
	);
}
