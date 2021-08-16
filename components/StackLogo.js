import Image from "next/image";

function StackLogo({ logo }) {
	return (
		<div className="flex w-30 h-30 p-5 bg-white rounded-full items-center justify-center hover:-translate-y-3 hover:shadow-white-xl transition active:translate-y-3">
			<Image src={logo} width={100} height={100} />
		</div>
	);
}

export default StackLogo;
