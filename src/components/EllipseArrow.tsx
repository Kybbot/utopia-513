import React, { FC } from "react";

type EllipseArrowProps = {
	className?: string;
};

export const EllipseArrow: FC<EllipseArrowProps> = ({ className }) => {
	return (
		<span className={`ellipseArrow ${className ? className : ""}`}>
			<svg width="12" height="12" focusable="false" aria-hidden="true">
				<use xlinkHref="/icons.svg#arrow" />
			</svg>
		</span>
	);
};
