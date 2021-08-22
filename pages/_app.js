import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Nino Joy | Portfolio</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
