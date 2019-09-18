import React from "react";
import './about.scss';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import strips from "../../assets/images/images/strips1.png";
import dots from "../../assets/images/images/dots-box1.png";
import frosting from "../../assets/images/images/box1.png"

export default props =>{
    return (
        <div className="about-container">
            <Row>
                <Col sm={7} className="text">
                    <div>
                        <h4 className="about-h4">Delicious cupcakes, magical moments!</h4>
                        <div>Sweet Corner is growing fast. Our delicious cupcakes of all sizes, shapes and colors and tastes are creating a real wow factor.</div>
                        <div>Our delicious cupcakes are different from other bakeries. Why? Well, not only are our cupcakes and baked goods prepared fresh every day, we also create personalized cupcakes in any size and shape just for you! Simply delicious and unique.</div>
                        <div>Our expert bakers create stunning cupcakes in any flavor, color, size or shape you choose.</div>
                        <div>Have you seen a stunning cupcake in a magazine, a TV show or on the internet? Want something unique to reflect a character or personality? Sweet Corner's cupcakes are baked with love and that's why we can create perfect and unique cupcake for you.</div>
                        <div>No idea is too creative for our bakers at Sweet Corner cupcakes. Contact us today to discuss you special cupcake.</div>
                    </div>
                </Col>
                <Col sm={{span:2, offset: 3}} className="about-lines">
                    <img className="about-dots" src={dots} />
                    <div className="about-strips" style={{backgroundImage:`url(${strips})`}} />
                </Col>
                <div className="about-tagline">Please note you will be overwhelmed by the sweet content</div>
                <img className="btmCupCakes" src={frosting} />
            </Row>
        </div>
    )
}