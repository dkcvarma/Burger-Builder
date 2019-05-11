import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         // each entry has (for example) ['salad', '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }  
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }

    CheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    CheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/"/>
        if (this.props.ings) {
            summary = (
                <div>
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        onCheckoutCancelled={this.CheckoutCancelledHandler}
                        onCheckoutContinued={this.CheckoutContinuedHandler}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData} />
                </div>
            );
        }
        // return (
        //     <div>
        //         <CheckoutSummary 
        //             ingredients={this.props.ings}
        //             onCheckoutCancelled={this.CheckoutCancelledHandler}
        //             onCheckoutContinued={this.CheckoutContinuedHandler}/>
        //         <Route 
        //             path={this.props.match.path + '/contact-data'} 
        //             // render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)} 
        //             component={ContactData} />
        //     </div>
        // )
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);