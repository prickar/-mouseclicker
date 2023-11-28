import { useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Header title="Mouse Tracker" initialCount={count} />
			<main>
				<Card setCount={setCount} />
			</main>
			<Footer />
		</div>
	)
}

export default App
