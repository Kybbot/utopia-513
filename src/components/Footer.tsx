import React, { FC } from "react";
import Image from "next/image";
import { EllipseArrow } from "./EllipseArrow";

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__container">
					<div className="footer__one">
						<div className="footer__logo">
							<Image src="/logo.svg" width={50} height={50} alt="Logo" className="footer__img" aria-hidden="true" />
							<p className="footer__name">Utopia 513</p>
						</div>
						<p className="footer__desc">
							In our progressive 3D studio, talented creative masters gather to craft captivating 3D graphics
							mesmerizing with their realism and detail.
						</p>
						<div className="footer__subscribe">
							<h3 className="footer__title">Subscribe</h3>
							<input type="email" className="footer__email" placeholder="Your e-mail" />
							<EllipseArrow className="footer__email--dec" />
						</div>
					</div>
					<div className="footer__two">
						<nav className="footer__nav">
							<h3 className="footer__title">Menu</h3>
							<ul className="footer__list">
								<li className="footer__item">
									<a className="footer__link" href="#">
										About Us
									</a>
								</li>
								<li className="footer__item">
									<a className="footer__link" href="#">
										Service
									</a>
								</li>
								<li className="footer__item">
									<a className="footer__link" href="#">
										Cases
									</a>
								</li>
								<li className="footer__item">
									<a className="footer__link" href="#">
										Contact Us
									</a>
								</li>
							</ul>
						</nav>
						<nav className="footer__nav">
							<h3 className="footer__title">Help</h3>
							<ul className="footer__list">
								<li className="footer__item">
									<a className="footer__link" href="#">
										FAQ
									</a>
								</li>
								<li className="footer__item">
									<a className="footer__link" href="#">
										Privacy Policy
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="footer__third">
						<h3 className="footer__title">Join our social networks</h3>
						<div className="footer__socials">
							<a href="#" className="footer__social">
								<Image src="/icons/behance.png" alt="Behance" width={30} height={19} />
							</a>
							<a href="#" className="footer__social">
								<Image src="/icons/artstation.png" alt="Artstation" width={30} height={27} />
							</a>
							<a href="#" className="footer__social">
								<Image src="/icons/linkedin.png" alt="Linkedin" width={26} height={26} />
							</a>
							<a href="#" className="footer__social">
								<Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} />
							</a>
						</div>
					</div>
					<div className="footer__fourth">
						<h3 className="footer__title">See more</h3>
						<div className="footer__links">
							<a href="#" className="footer__potfolio">
								Portfolio
								<EllipseArrow className="footer__potfolio--dec" />
							</a>
							<a href="#" className="footer__about">
								About us
							</a>
						</div>
					</div>
				</div>
				<div className="footer__fifth">
					<div className="footer__sound">
						<Image src="/icons/sound.png" width={33} height={26} alt="Sound" />
					</div>
					<p className="footer__copyright">{`© Utopia 513 ${new Date().getFullYear()}`}</p>
					<p className="footer__hi">
						SAY HI! <EllipseArrow className="footer__hi--dec" />
					</p>
				</div>
			</div>
		</footer>
	);
};
