import React from "react";
import backCard from "../images/bg-card-back.png";

const BacksideCard = (props) => {
	return (
		<div className="bg-section-back-side">
			<img
				src={backCard}
				alt="Back side of card"
				className="bg-section-card bg-section-card-back"
			/>
			<p className="bg-section-back-side-cvc">{props.cvc}</p>
		</div>
	);
};

export default BacksideCard;
