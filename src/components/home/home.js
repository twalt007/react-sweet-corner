import React from "react";
import './home.scss';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap'
import strips from '../../assets/images/images/strips2.png'
import dots from '../../assets/images/images/dots-box2.png'
import bottomCupcakes from '../../assets/images/images/cupcakes.png'

export default props =>{
    return (
        <div className="home-container">
            <Row>
                <Col sm={7} className="text">
                    <div>
                        <h4>We cherish the sweet moments...</h4>
                        <div>Sweet Corner's story began first from our passion for sweets, which is inspired by our everyday job and also by the acknowledged weakness for sweets.</div>
                        <div>For us, the Sweet corner means: the right amount of sweet, flawless appearance, the combination of shape, color and proportion and a right and balanced decor for the event.</div>
                        <div>We have been baking gourmet cupcakes, 100% from Scratch, since day one. We always use the finest and most natural ingredients we can find.</div>
                        <h4>We can make happiness with so little!</h4>
                        <div>We can provide services for Weddings, Bar &amp; Bat Mitzvahs, Birthdays, Showers,Corporate Events, and any other special occasion!</div>
                        <div>Our expert bakers are waiting to create a memorable, unique cupcake bursting with freshness and flavor just for you.</div>
                        <div>Their delicious taste, great variety and their sweet universe, colorful and flavorful cupcakes make the best choice for a chic desert. How could you resist these delicious cupcakes?</div>
                    </div>
                </Col>
                <Col sm={5} className="lines">
                    <img className="dots" src={dots} />
                    <div className="strips" style={{backgroundImage:`url(${strips})`}} />
                </Col>
                <div className="home-tagline">Please note you will be overwhelmed by the sweet content</div>
                <img className="btmCupCakes" src={bottomCupcakes} />
            </Row>
        </div>
    )
}