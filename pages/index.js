import Head from "next/head";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

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

			{/* Portfolio */}
			<Portfolio />

			{/* Footer */}
			<Footer />
		</div>
	);
}
