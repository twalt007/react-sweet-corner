import React, {Component} from 'react'
import './products.scss'
import {connect} from 'react-redux'
import {getAllProducts} from '../../actions/index'
import ProductItem from './product_item';
import {Row} from 'react-bootstrap';

class Products extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(e){
        this.props.getAllProducts();
    }
    render(){
        const {products} = this.props;
        console.log(products)
        const productList = products.map((product,index)=>{
            return <ProductItem {...product} key={product.id} />
        });
        return(
            <div className="products-container">
                <h1 className="title">Our Products</h1>
                <Row className="list">
                    {productList}
                </Row>                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {products: state.products.list}
}

export default connect(mapStateToProps,{
    getAllProducts: getAllProducts
})(Products);