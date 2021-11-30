import React from "react";

const SecondComp = ({p}) => {
    return(
    <div>
        <p>Количество медалей, полученных командой: {p.medal}</p>
        <p>Количество кубков, полученных командой: {p.cup}</p>
    </div>
    )
}

export default SecondComp;