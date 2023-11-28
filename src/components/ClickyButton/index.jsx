import { useState } from "react"

const ClickyButton = () => {

    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <p>
            click to find out what happens
            </p>

            <button
              onClick={() => setClicked(true)}
              disabled={clicked}
            >
            clicky button
            </button>
        </div>

    )
}

export default ClickyButton