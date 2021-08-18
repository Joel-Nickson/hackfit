import Image from "next/image";

function StackLogo({ logo, link }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="flex w-30 h-30 p-5 bg-white rounded-full items-center justify-center sm:hover:-translate-y-3 hover:shadow-white-xl transition sm:active:translate-y-3 active:bg-gray-600">
				<Image src={logo} width={100} height={100} />
			</div>
		</a>
	);
}

export default StackLogo;
