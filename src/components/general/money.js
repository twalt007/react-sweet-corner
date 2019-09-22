import React from 'react';

const money = (props) => {
    const {cost} = props.number;
    const price = `$${(cost/100).toFixed(2)}`;
    return (
        <div className="cost">{price}</div>
    )
}

export default money;