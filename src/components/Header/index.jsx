import { useState } from "react"

const Header = ({ title, initialCount }) => {
	const [count, setCount] = useState(initialCount)

	return (
		<>
			<header>
				<h1>{title}</h1>
				<h2>Let the clickathon begin!</h2>
			</header>

			<div data-testid="count">Count: {count}</div>

			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Get a Star
			</button>
		</>
	)
}

export default Header
