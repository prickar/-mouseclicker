import ClickyButton from "../ClickyButton"
import Star from '../../assets/icons8-hand-drawn-star-24.png'
import Moon from '../../assets/moon2.png';
import { useState } from "react"

const Card = ({ setCount }) => {
	const [stars, setstars] = useState([])

	const handleShowImage = () => {
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
			<div className="flex justify-center items-center min-h-screen">
				{stars.map((star, index) => (
					<img
						key={index}
						src={Star}
						alt="Star"
						className="absolute animate-[pulse_10s_ease-in-out_infinite]"
						style={{ top: star.top, left: star.left }}
					/>
				))}

				<div
					data-testid="card"
					className="relative bg-cover bg-center h-[500px] w-[500px]"
					style={{ backgroundImage: `url(${Moon})` }}
				>
					<div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
						<h3>How it Works</h3>
						<p data-testid="infotext">
							Click the button to see more stars
						</p>
						<ClickyButton />
						<button
							className="btn"
							name="Get a Star"
							onClick={handleShowImage}
						>
							Get a Star
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Card
