import Image from "next/image";
import React, { FC } from "react";

export const Cases: FC = () => {
	return (
		<section className="cases">
			<div className="container">
				<div className="cases__container">
					<h2 className="cases__title">Cases</h2>
					<p className="cases__desc">We position ourselves as a Ukrainian studio and primarily collaborate</p>
					<div className="cases__wrapper">
						<article className="case">
							<div className="case__img">
								<Image src="/case1.jpg" alt="Case1" fill quality={100} />
							</div>
							<hr className="case__hr" />
							<h3 className="case__title">
								<a href="#" className="case__link">
									Let’s talk name project{" "}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path
											d="M1.48528 18.456L18.4558 1.48542M18.4558 1.48542H1.48528M18.4558 1.48542V18.456"
											stroke="#08173E"
											stroke-width="2"
										/>
									</svg>
								</a>
							</h3>
							<a href="#" className="case__tag">
								3D animation
							</a>
						</article>
						<article className="case">
							<div className="case__img">
								<Image src="/case2.jpg" alt="Case1" fill quality={100} />
							</div>
							<hr className="case__hr" />
							<h3 className="case__title">
								<a href="#" className="case__link">
									Let’s talk name project{" "}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path
											d="M1.48528 18.456L18.4558 1.48542M18.4558 1.48542H1.48528M18.4558 1.48542V18.456"
											stroke="#08173E"
											stroke-width="2"
										/>
									</svg>
								</a>
							</h3>
							<a href="#" className="case__tag">
								3D animation
							</a>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};
