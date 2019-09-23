import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductDetails, clearProductDetails} from '../../actions'
import Money from '../general/money'
import {Row, Col} from 'react-bootstrap';

class ProductDetails extends Component{
    
    componentDidMount(){
        const {getProductDetails, match: {params}} = this.props;
        getProductDetails(params.product_id);
    }
    componentWillUnmount(){
        this.props.clearProductDetails();
    }

    render(){
        const {details} = this.props;
        if(!details){
            return(
                <h1>Loading</h1>
            )
            
        }else{
            return(
                <div className="details-container">
                    <Row>
                        <Col md={5} sm={12}>
                            <img className="image" src={details.image.url}/>
                        </Col>
                        <Col md={7} sm={12}>
                            <div className="content">
                                <h1>{details.name}</h1>
                                <div className="tagline">{details.caption}</div>
                                <h4>Description</h4>
                                <div>{details.description}</div>
                                <Money number={details}/>
                            </div>
                            
                        </Col>
                    </Row>
                </div>
            )
        }
        
    }
};

function mapStateToProps(state){
    console.log("mapStateToProps",state);
    return {details: state.products.details}
}

export default connect(mapStateToProps,{
    getProductDetails:getProductDetails,
    clearProductDetails:clearProductDetails
})(ProductDetails);