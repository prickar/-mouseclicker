import { useState } from "react"

const ClickyButton = ({ onButtonClick }) => {
	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		setClicked(true)
		onButtonClick() // Call the provided function when the button is clicked
	}

	return (
		<div data-testid="resultbox">
			{!clicked ? "Click to find out what happens" : "Wow - a star!"}
			<p>
				<button
					data-testid="clickybutton"
					name="clicky button"
					onClick={handleClick}
					disabled={clicked}
					className="btn bg-slate-700 p-2 rounded-md"
					style={{
						color: clicked ? "rgb(51, 65, 85)" : "#FFFFFF",
					}}
				>
					clicky button
				</button>
			</p>
		</div>
	)
}

export default ClickyButton
