import React from "react";

const ThirdComp = ({items}) => {
    return (
        <div>
            {items.map(item =>{
            <div>
                <div>firstname={item.firstname}</div>
                <div>lastname={item.lastname}</div>
                <div>key={item.id}</div>
            </div>
            )}
        </div>
    )
}

export default ThirdComp;