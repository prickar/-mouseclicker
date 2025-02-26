import ClickyButton from "../ClickyButton"
import Star from "../../assets/icons8-hand-drawn-star-24.png"
import Moon from "../../assets/moon2.png"
import { useState } from "react"

const Card = ({ setCount }) => {
	const [stars, setStars] = useState([])

	const handleShowImage = () => {
		setCount((prevCount) => prevCount + 1)

		const newStar = {
			id: stars.length + 1,
			top: `${Math.random() * window.innerHeight}px`,
			left: `${Math.random() * window.innerWidth}px`,
		}

		setStars([...stars, newStar])
	}

	return (
		<>
			<div className="flex justify-center items-center">
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
					className="relative bg-cover bg-center h-[250px] w-[250px] md:h-[35vw] md:w-[35vw] flex"
					style={{ backgroundImage: `url(${Moon})` }}
				>
					<div className="absolute inset-0 flex flex-col justify-center items-center text-black p-8 text-center h-full w-full">
						<h3 className=" text-xl">How it Works</h3>
						<p data-testid="infotext">
							Click the button to see&nbsp;more&nbsp;stars
						</p>
						<ClickyButton />
						<button
							className="btn bg-slate-500 p-2 rounded-md m-2 text-white"
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
