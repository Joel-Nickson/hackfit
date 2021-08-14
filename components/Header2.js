import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import Image from "next/image";
import logo from "../assets/logo.png";

let navigation = [
	{ name: "ABOUT", href: "#" },
	{ name: "PORTFOLIO", href: "#" },
	{ name: "CONTACT", href: "#" },
];

function Header2() {
	return (
		<div class="sticky top-0 px-10 py-5 bg-gray-800 inline-flex justify-between min-w-full">
			<Image src={logo} alt="logo" width={40} height={40} />

			<div className="hidden md:block">
				<div className="flex space-x-5">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 transform transition rounded-md text-sm font-medium active:bg-gray-800 active:translate-y-0.5"
						>
							{item.name}
						</a>
					))}
				</div>
			</div>

			<Menu as={Fragment}>
				<Menu.Button>
					<MenuIcon className="p-2 w-10 h-10 md:hidden hover:bg-gray-700 rounded-full active:bg-gray-800" />
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
					<Menu.Items className="absolute right-5 w-52 mt-20 origin-top-right bg-gray-800 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1">
							<Menu.Item>
								<a
									className=" group flex px-2 py-2  hover:bg-gray-200 hover:text-gray-800 rounded-md active:bg-gray-200 active:text-gray-800 transform transition"
									href="#"
								>
									About
								</a>
							</Menu.Item>
							<Menu.Item>
								<a
									className="group flex px-2 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md active:bg-gray-200 active:text-gray-800 transform transition"
									href="#"
								>
									Portfolio
								</a>
							</Menu.Item>
							<Menu.Item>
								<a
									className=" group flex px-2 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md active:bg-gray-200 active:text-gray-800 transform transition"
									href="#"
								>
									Contact
								</a>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

export default Header2;
