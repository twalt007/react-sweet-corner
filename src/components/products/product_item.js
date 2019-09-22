import React from 'react';
import Money from '../general/money'
import {Col} from 'react-bootstrap';


const productItem = (props)=> {
    const money = props.cost;
    console.log("productItem props", money);
    const {caption, cost, name, thumbnail} = props;
    return (
        <Col md={4} sm={6} className="product-item" onClick={props.goToDetails}>
            <div className="border">
                <h4 className="name">{name}</h4>
                <img className="image" src={thumbnail['url']} alt={thumbnail['altText']} />
                <div className="caption">{caption}</div>
                <Money className="cost" number = {props}/>
            </div>
        </Col>
    )
}

export default productItem;