import React from "react";
import CompleteIcon from "../images/icon-complete.svg";

const Complete = (props) => {
	return (
		<>
			<div className="complete-section">
				<img src={CompleteIcon} alt="Completion Svg" />
				<h1>THANK YOU!</h1>
				<p>We've added your card details</p>
				<button
					className="confirm-btn"
					onClick={() => window.location.reload()}>
					Continue
				</button>
			</div>
		</>
	);
};

export default Complete;
