import { useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { handleMouseMove } from '../src/utils/utils'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div 
    data-testid="app" 
    className="App"
    onMouseMove={handleMouseMove}
    >

      <div 
      id="coor"
      data-testid="coor"
      ></div>

			<Header title="Mouse Tracker" initialCount={count} />
			<main>
        
				<Card setCount={setCount} />
			</main>
			<Footer />
		</div>
	)
}

export default App
