import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

import Image from "next/image";
import logo from "../assets/logo.png";

const navigation = [
	{ name: "about" },
	{ name: "stuff i do" },
	{ name: "personal projects" },
	{ name: "get in touch" },
];

const emojiColor = "RGB(255,222,52)";

function Header() {
	const [mobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div>
			<div
				className="px-12 lg:px-32 py-5 bg-gray-900 flex justify-between min-w-full"
				id="header"
			>
				<Image src={logo} alt="logo" width={40} height={40} />

				<div className="hidden md:block">
					<div className="flex space-x-5">
						{navigation.map((item) => (
							<Link
								activeClass="bg-gray-800"
								to={item.name}
								spy={true}
								smooth={true}
								offset={40}
								duration={600}
								className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 active:bg-gray-800 active:translate-y-0.5 transform transition rounded-md text-sm font-medium font-poppins"
							>
								{item.name.toUpperCase()}
							</Link>
						))}
					</div>
				</div>

				<MenuIcon
					className="p-2 w-10 h-10 md:hidden hover:bg-gray-700 rounded-full active:bg-gray-800 text-gray-100"
					onClick={() => setIsMobileMenuOpen(!mobileMenuOpen)}
				/>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden px-12 bg-gray-900 text-gray-100 flex flex-col items-center space-y-3">
					{navigation.map((item) => (
						<Link
							// onClick={() => setIsMobileMenuOpen(!mobileMenuOpen)}
							activeClass="bg-gray-800"
							to={item.name}
							spy={true}
							smooth={true}
							offset={50}
							duration={600}
							className="flex justify-center items-center bg-gray-800 w-full py-2 text-gray-300 active:bg-gray-500 active:translate-y-0.5 transform transition rounded-md text-sm font-medium font-poppins tracking-wide"
						>
							{item.name.toUpperCase()}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

export default Header;
