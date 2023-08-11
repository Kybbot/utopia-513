import React from "react";
import Image from "next/image";

export const JoinUs = () => {
	return (
		<section className="joinUs">
			<div className="container">
				<div className="joinUs__container">
					<h2 className="joinUs__title">
						Join us and unlock <span className="joinUs__title--span">the potential of</span> 3D magic
					</h2>
					<div className="joinUs__socials">
						<a href="#" className="joinUs__social">
							<Image src="/icons/behance.png" alt="Behance" width={30} height={19} />
						</a>
						<a href="#" className="joinUs__social">
							<Image src="/icons/artstation.png" alt="Artstation" width={30} height={27} />
						</a>
						<a href="#" className="joinUs__social">
							<Image src="/icons/linkedin.png" alt="Linkedin" width={26} height={26} />
						</a>
						<a href="#" className="joinUs__social">
							<Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} />
						</a>
					</div>
					<a href="#" className="joinUs__circle">
						SAY HI!
					</a>
				</div>
			</div>
		</section>
	);
};
