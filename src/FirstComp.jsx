import React from "react";

const FirstComp = ({a}) => {
    console.dir(a);
    return (
        <div>
            <p>Название команды: {a.name}</p>
            <p>Город, в котором команда играет: {a.city}</p>
            <p>Год создания: {a.year}</p>
        </div>
    );
}

export default FirstComp;