import { useState, useEffect } from "react";
import Image from "next/image";

import scrolltotop from "../assets/icons/scrolltotop.svg";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="fixed sm:bottom-5 sm:right-5 bottom-3 right-3 transition-all duration-500 ease-in-out">
			{isVisible && (
				<a onClick={scrollToTop}>
					<Image
						width={35}
						height={35}
						src={scrolltotop}
						alt="Go to top"
						priority={true}
					/>
				</a>
			)}
		</div>
	);
};

export default ScrollToTop;
