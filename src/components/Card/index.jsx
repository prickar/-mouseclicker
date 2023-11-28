const Card = ({ setCount }) => {
	return (
		<>
			<div data-testid="card">
				<h3>How it Works</h3>
				<p data-testid="infotext">Click the button to see more stars</p>
			</div>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Get a Star
			</button>
		</>
	)
}

export default Card
