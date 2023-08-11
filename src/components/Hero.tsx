import Image from "next/image";
import React, { FC } from "react";

export const Hero: FC = () => {
	return (
		<section className="hero">
			<div className="container">
				<h1 className="hero__title">
					<span className="hero__title--first">We create </span>
					<span className="hero__title--second">3D magic</span>
				</h1>
				<p className="hero__text">
					In our progressive 3D studio, talented creative masters gather to craft captivating 3D graphics mesmerizing
					with their realism and detail.
				</p>
				<div className="hero__img">
					<Image src="/star.png" alt="Star" fill quality={100} />
				</div>
				<div className="hero__video">
					<Image src="/videoBg.jpg" alt="Star" fill quality={100} />
				</div>
			</div>
		</section>
	);
};
