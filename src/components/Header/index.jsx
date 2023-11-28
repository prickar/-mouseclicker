const Header = ({ title, initialCount }) => {
	return (
		<>
			<header>
				<h1>{title}</h1>
				<h2>Let the clickathon begin!</h2>
			</header>

			<div data-testid="count">Count: {initialCount}</div>
		</>
	)
}

export default Header
