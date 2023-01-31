import { useState } from "react";
import Background from "./components/Background";
import Form from "./components/Form";
import "./css/main.css";

const App = () => {
	const [name, setName] = useState("");
	const [nameLength, setNameLength] = useState(0);
	const [cardNumber, setCardNumber] = useState("0000000000000000");
	const [month, setMonth] = useState("01");
	const [year, setYear] = useState("23");
	const [cvc, setCvc] = useState("");

	return (
		<>
			<div className="container">
				<Background
					cvc={cvc !== "" ? cvc : "000"}
					firstQuarter={cardNumber.slice(0, 4)}
					secondQuarter={cardNumber.slice(4, 8)}
					thirdQuarter={cardNumber.slice(8, 12)}
					fourthQuarter={cardNumber.slice(12, 16)}
					cardName={name}
					cardNameLength={nameLength}
					cardMonth={month}
					cardYear={year}
				/>
				<Form
					handleNameChange={(e) => {
						setName(e.target.value.toUpperCase().slice(0, 28));
						setNameLength(name.length);
					}}
					handleNumberChange={(e) =>
						e.target.value.length < 17 && setCardNumber(e.target.value)
					}
					cardNumberValue={cardNumber !== "0000000000000000" ? cardNumber : ""}
					updateMonth={(e) => setMonth(e.target.value)}
					updateYear={(e) => setYear(e.target.value.slice(2, 4))}
					handleCvcChange={(e) => setCvc(e.target.value.slice(0, 3))}
					cvcValue={cvc.length > 3 ? cvc.slice(0, 3) : cvc}
				/>
			</div>
		</>
	);
};

export default App;
