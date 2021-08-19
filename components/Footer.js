import ReactTypingEffect from "react-typing-effect";

const Footer = () => {
	return (
		<div
			id="footer"
			className=" bg-gray-900 p-5 flex items-center justify-center text-gray-100"
		>
			<footer>
				<p className="font-light font-poppins tracking-wider text-sm">
					Made with 💛 &nbsp;using{" "}
					{
						<ReactTypingEffect
							cursorClassName=""
							speed="80"
							eraseSpeed="100"
							eraseDelay="1500"
							typingDelay="500"
							text={["React", "Next.js", "Tailwind"]}
						/>
					}
				</p>
			</footer>
		</div>
	);
};

export default Footer;
