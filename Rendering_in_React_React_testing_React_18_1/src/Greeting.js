import React from "react";

function Greeting(props) {
    const { name, greeting } = props;
    return (
        <div>
            Hello and {greeting}, {name}!
        </div>
    )
}

export default Greeting;
