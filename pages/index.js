import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import PersonalProjects from "./PersonalProjects";
import StuffIDo from "./StuffIDo";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
	return (
		<div>
			<ScrollToTop />
			{/* Header */}
			<Header />

			{/* About */}
			<About />

			{/* Stuff I Do */}
			<StuffIDo />

			{/* Personal Projects */}
			<PersonalProjects />

			{/* Contact */}
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	);
}
