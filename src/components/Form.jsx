import React, { useState } from "react";
import { months, years } from "./numbersArray";
import Complete from "./Complete";

const Form = (props) => {
	const [isCompleted, setIsCompleted] = useState(false);
	return (
		<>
			{!isCompleted && (
				<form>
					<label>
						<p>CARDHOLDER NAME</p>
						<input
							type="text"
							onChange={props.handleNameChange}
							placeholder="e.g. Jane Appleseed"
						/>
					</label>
					<label>
						<p>CARD NUMBER</p>
						<input
							type="number"
							min={0}
							placeholder="e.g. 1234 5678 9123 0000"
							onChange={props.handleNumberChange}
							value={props.cardNumberValue}
						/>
					</label>
					<div className="form-div">
						<label>
							<p>EXP. DATE (MM/YY)</p>

							<select onChange={props.updateMonth}>
								{months.map((el) => {
									return (
										<option value={el} key={el}>
											{el}
										</option>
									);
								})}
							</select>
							<select onChange={props.updateYear}>
								{years.map((el, index) => {
									return (
										<option value={el} key={index}>
											{el}
										</option>
									);
								})}
							</select>
						</label>
						<label>
							<p>CVC</p>
							<input
								type="number"
								placeholder="e.g. 123"
								min="100"
								max="999"
								value={props.cvcValue}
								onChange={props.handleCvcChange}
							/>
						</label>
					</div>
					<button
						className="confirm-btn"
						onClick={(e) => {
							e.preventDefault();
							setIsCompleted(!isCompleted);
						}}>
						Confirm
					</button>
				</form>
			)}
			{isCompleted && <Complete />}
		</>
	);
};

export default Form;
