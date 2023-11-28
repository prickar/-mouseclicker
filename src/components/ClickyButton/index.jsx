import { useState } from "react"

const ClickyButton = () => {
	const [clicked, setClicked] = useState(false)

	return (
		<div data-testid="resultbox">
			{!clicked ? "Click to find out what happens" : "Wow!"}
			<p>
				<button
					data-testid="clickybutton"
					name="clicky button"
					onClick={() => setClicked(true)}
					disabled={clicked}
				>
					clicky button
				</button>
			</p>
		</div>
	)
}

export default ClickyButton
