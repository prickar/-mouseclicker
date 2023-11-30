import ClickyButton from "../ClickyButton"
import Moon from "../../assets/moon.png"

<<<<<<< HEAD
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
=======
const Card = ({ setCount, onClick }) => {
>>>>>>> 901318558308030cbd4f2dd026443beb33fb1880
	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
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
<<<<<<< HEAD
							onClick={handleShowImage}
=======
							onClick={onClick}
>>>>>>> 901318558308030cbd4f2dd026443beb33fb1880
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
