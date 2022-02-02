import { useState } from "react";

function Header(props) {
    const [color, setColor] = useState("red")

    function addHandler() {
        setColor("blue");
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <h2>{props.description}</h2>
            <div className='actions'>
                <button className='btn' onClick={addHandler}>Add action</button>
            </div>
            <h2>Initial state is: {color}</h2>
        </div>
    );
}

export default Header;
