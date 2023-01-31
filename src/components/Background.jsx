import mobileBg from "../images/bg-main-mobile.png";
import BacksideCard from "./BacksideCard";
import FrontsideCard from "./FrontsideCard";

const Background = (props) => {
	return (
		<div className="bg-section">
			<img src={mobileBg} alt="Background" className="bg-section-bg" />
			<BacksideCard cvc={props.cvc} />
			<FrontsideCard
				cardName={props.cardName}
				cardNameLength={props.cardNameLength}
				cardMonth={props.cardMonth}
				cardYear={props.cardYear}
				firstQuarter={props.firstQuarter}
				secondQuarter={props.secondQuarter}
				thirdQuarter={props.thirdQuarter}
				fourthQuarter={props.fourthQuarter}
			/>
		</div>
	);
};

export default Background;
