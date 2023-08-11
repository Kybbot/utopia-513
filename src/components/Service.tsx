import React, { FC } from "react";

export const Service: FC = () => {
	return (
		<section className="service">
			<div className="container">
				<div className="service__container">
					<h2 className="service__title">Service</h2>
					<p className="service__desc">
						Unleash new horizons with our services: enchanting 3D models, virtuoso visualizations, lively animations.
					</p>
					<ul className="service__list">
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">01</span>
								3D Animation
							</a>
						</li>
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">02</span>
								3D Character
							</a>
						</li>
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">03</span>
								3D Illustrations
							</a>
						</li>
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">04</span>
								3D Environment
							</a>
						</li>
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">05</span>
								NFT & Metaverse
							</a>
						</li>
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">06</span>
								Cinematics & VFX
							</a>
						</li>
						<li className="service__item">
							<a href="#" className="service__link">
								<span className="service__item--number">07</span>
								Product rendering
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
