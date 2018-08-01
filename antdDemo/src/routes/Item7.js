import React,{Component} from 'react';
import {connect} from 'dva';
import ProductList from '../components/ProductList';
import UserLayout from '../components/UserLayout';
// = ({dispatch,products}) =>
class Item7 extends Component  {
    handleDelete = (id) =>{
        this.props.dispatch({
            type:'products/delete',
            payload:id
        })
    }

    render(){
        const mainContent = (
            <div>
                <h2>List of Products</h2>
                <ProductList onDelete={this.handleDelete} products={this.props.products}/>            
            </div>
        )
        return (
            <UserLayout mainContent={mainContent} menuKey={{'openMenuItem':'sub3','currentSelectItem':'7'}}/>
        );
    }   
    
} 

function mapStateToProps(state){
    const {products} = state
    return {products};
}
export default connect(mapStateToProps)(Item7);