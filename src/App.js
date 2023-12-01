import { useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { handleMouseMove } from "../src/utils/utils"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div
			data-testid="app"
			className="App bg-slate-950 text-white min-h-screen flex flex-col font-bangers"
			onMouseMove={handleMouseMove}
		>
			<div id="coor" data-testid="coor"></div>

			<Header title="Mouse Tracker" initialCount={count} />

			<main className="flex-1 flex items-center justify-center">
				<div className="h-full">
					<Card setCount={setCount} />
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
