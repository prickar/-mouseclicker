import ClickyButton from "../ClickyButton"

const Card = ({ setCount }) => {
	return (
		<>
			<div data-testid="card">
				<h3>How it Works</h3>
				<p data-testid="infotext">Click the button to see more stars</p>
				<ClickyButton />
				<button
					name="Get a Star"
					onClick={() => setCount((prevCount) => prevCount + 1)}
				>
					Get a Star
				</button>
			</div>
		</>
	)
}

export default Card
