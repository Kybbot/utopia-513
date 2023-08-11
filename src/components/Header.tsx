import React, { FC } from "react";
import Image from "next/image";

export const Header: FC = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__container">
					<div className="header__logo">
						<Image src="/logo.svg" width={29} height={29} alt="Logo" className="header__img" aria-hidden="true" />
						<p className="header__name">Utopia 513</p>
					</div>
					<button className="header__open" aria-label="Open navigation">
						<svg width="12" height="12" focusable="false" aria-hidden="true">
							<use xlinkHref="/icons.svg#open" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};
