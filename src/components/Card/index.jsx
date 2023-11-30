import ClickyButton from "../ClickyButton";
import Moon from '../../assets/moon.png';

const Card = ({ setCount }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div 
        data-testid="card"
        className="relative bg-cover bg-center h-[500px] w-[500px]"
        style={{ backgroundImage: `url(${Moon})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
          <h3>How it Works</h3>
          <p data-testid="infotext">Click the button to see more stars</p>
          <ClickyButton />
          <button
            className="btn mt-4"
            name="Get a Star"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Get a Star
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
