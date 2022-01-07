import Image from "next/image";

function Socials({ link, logo, bg }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="flex p-3 bg-gray-800 h-12 w-12 md:h-14 md:w-14 md:p-4 rounded-full items-center justify-center hover:bg-gray-700 sm:hover:-translate-y-1 hover:shadow-white-lg transition sm:active:translate-y-3 active:bg-gray-500">
				<Image src={logo} width={50} height={50} priority={true} />
			</div>
		</a>
	);
}

export default Socials;
