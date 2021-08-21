import Head from "next/head";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import PersonalProjects from "./PersonalProjects";
import StuffIDo from "./StuffIDo";

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

			{/* Contact */}
			{/* <Contact /> */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
