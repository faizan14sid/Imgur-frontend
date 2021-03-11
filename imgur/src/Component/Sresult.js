import React from 'react';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/user/erondu/600x400/?${props.name}`
    return (
        <div>
            <img src={img} alt="" ></img>
        </div>
    )
};
export default Sresult;
