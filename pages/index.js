import Head from "next/head";

import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import Portfolio from "../components/Portfolio";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Nino Joy</title>
			</Head>

			{/* Header */}
			<Header2 />
			{/* <Header /> */}

			{/* About */}
			<About />

			{/* Portfolio */}
			<Portfolio />

			{/* Footer */}
			<Footer />
		</div>
	);
}
