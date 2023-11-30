const Header = ({ title, initialCount }) => {
	return (
		<>
			<header className="flex flex-col items-center">
				<h1>{title}</h1>
				<h2>Let the clickathon begin!</h2>
			</header>

			<div data-testid="count">Count: {initialCount}</div>
		</>
	)
}

export default Header
