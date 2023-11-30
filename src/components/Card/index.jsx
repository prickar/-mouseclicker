import ClickyButton from "../ClickyButton"
import Star from '../../assets/icons8-hand-drawn-star-24.png'
import { useState } from "react"

const Card = ({ setCount }) => {

	const [stars, setstars] = useState([])

	const handleClick = () => {
	    setCount((prevCount) => prevCount + 1)

	const newStar = {
		id: stars.lenght + 1,
		top: `${Math.random() * window.innerHeight}px`,
		left: `${Math.random() * window.innerWidth}px`,
	}

	setstars([...stars, newStar])
}
	return (
		<>
			<div data-testid="card">
				<h3>How it Works</h3>
				<p data-testid="infotext">Click the button to see more stars</p>
				<ClickyButton />
				<button
					name="Get a Star"
					onClick={handleClick}
				>
					Get a Star
				</button>
				
				{stars.map((star, index) => (
          <img
            key={index}
            src={Star}
            alt="Star"
            className="absolute"
            style={{ top: star.top, left: star.left }}
          />
        ))}

			</div>
		</>
	)
}

export default Card
