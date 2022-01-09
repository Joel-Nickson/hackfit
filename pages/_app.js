import "tailwindcss/tailwind.css";
import Head from "next/head";
import '../styles/back.scss'
import '../styles/test.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>HackFit 2022</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="theme-color" content="#111827" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
