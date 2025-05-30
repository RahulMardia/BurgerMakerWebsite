import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from "../../../src/components/Order/CheckoutSummary.js/CheckoutSummary";
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {



    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
        if (this.props.ings) {
            summary = (<div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>);
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased

    }
}




export default connect(mapStateToProps)(Checkout);