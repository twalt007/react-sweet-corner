import React, {Component} from 'react'
import './products.scss'
import {connect} from 'react-redux'
import {getAllProducts} from '../../actions/index'

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
        return(
            <div className="products-container">
                <h1>
                    Our Products
                </h1>
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