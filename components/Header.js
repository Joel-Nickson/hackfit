import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

import Image from "next/image";
import logo from "../assets/logo.png";

let navigation = [
	{ name: "about" },
	{ name: "portfolio" },
	{ name: "contact" },
];

const emojiColor = "RGB(255,222,52)";

function Header() {
	return (
		<div
			className="px-12 lg:px-32 py-5 bg-gray-900 inline-flex justify-between min-w-full"
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
							offset={-70}
							duration={600}
							className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 active:bg-gray-800 active:translate-y-0.5 transform transition rounded-md text-sm font-medium font-poppins"
						>
							{item.name.toUpperCase()}
						</Link>
					))}
				</div>
			</div>

			<Menu as={Fragment}>
				<Menu.Button>
					<MenuIcon className="p-2 w-10 h-10 md:hidden hover:bg-gray-700 rounded-full active:bg-gray-800 text-white" />
				</Menu.Button>

				<Transition
					as={Fragment}
					enter="transition duration-180 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-180 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<Menu.Items className="absolute right-10 w-52 mt-16 origin-top-right bg-white divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1">
							<Menu.Item>
								<Link
									className="group flex px-2 py-2  hover:bg-gray-200 hover:text-gray-800 rounded-md active:bg-gray-200 text-gray-800 transform transition font-poppins"
									to="about"
									spy={true}
									smooth={true}
									offset={-70}
									duration={600}
								>
									About
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link
									className="group flex px-2 py-2  hover:bg-gray-200 hover:text-gray-800 rounded-md active:bg-gray-200 text-gray-800 transform transition font-poppins"
									to="portfolio"
									spy={true}
									smooth={true}
									offset={-70}
									duration={600}
								>
									Portfolio
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link
									className="group flex px-2 py-2  hover:bg-gray-200 hover:text-gray-800 rounded-md active:bg-gray-200 text-gray-800 transform transition font-poppins"
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={600}
								>
									Contact
								</Link>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

export default Header;
