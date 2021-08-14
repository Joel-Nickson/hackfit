import Image from "next/image";

function StackLogo({ logo }) {
	return (
		<div className="w-30 h-30 p-5 bg-white shadow-2xl rounded-full items-center justify-center flex">
			<Image src={logo} width={100} height={100} />
		</div>
	);
}

export default StackLogo;
