import cardLogo from "../images/card-logo.svg";
import frontCard from "../images/bg-card-front.png";

const FrontsideCard = (props) => {
	return (
		<div className="bg-section-front-side">
			<img
				src={frontCard}
				alt="Front side of card"
				className="bg-section-card bg-section-card-front"
			/>
			<img
				src={cardLogo}
				alt="Front side logo"
				className="bg-section-card-logo"
			/>
			<p className="bg-section-front-side-number">
				<span className="bg-section-front-side-number quarter-span">
					{props.firstQuarter}
				</span>
				<span className="bg-section-front-side-number quarter-span">
					{props.secondQuarter}
				</span>
				<span className="bg-section-front-side-number quarter-span">
					{props.thirdQuarter}
				</span>
				<span className="bg-section-front-side-number quarter-span">
					{props.fourthQuarter}
				</span>
			</p>
			<p
				className="bg-section-front-side-name"
				style={
					props.cardNameLength > 22
						? { fontSize: "10px" }
						: { fontSize: "13px" }
				}>
				{props.cardName}
			</p>
			<p className="bg-section-front-side-date">
				{props.cardMonth}/{props.cardYear}
			</p>
		</div>
	);
};

export default FrontsideCard;
