import { useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { handleMouseMove } from "../src/utils/utils"
// import Star from "./assets/icons8-hand-drawn-star-24.png"

function App() {
	const [count, setCount] = useState(0)
	// const [stars, setstars] = useState([])

	// const handleClick = () => {
	// 	setCount((prevCount) => prevCount + 1)

	// 	const newStar = {
	// 		id: stars.lenght + 1,
	// 		top: `${Math.floor(Math.random() * 95)}vh`,
	// 		left: `${Math.floor(Math.random() * 95)}vw`,
	// 	}

	// 	setstars([...stars, newStar])
	// }

	return (
		<div
			data-testid="app"
			className="App bg-slate-950 text-white min-h-screen flex flex-col"
			onMouseMove={handleMouseMove}
		>
			{/* {stars.map((star, index) => (
				<img
					key={index}
					src={Star}
					alt="Star"
					className="absolute animate-[pulse_10s_ease-in-out_infinite]"
					style={{ top: star.top, left: star.left }}
				/>
			))} */}

			<div id="coor" data-testid="coor"></div>

			<Header title="Mouse Tracker" initialCount={count} />

			<main className="flex-1">
				<div className="h-full">
					<Card setCount={setCount} />
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
