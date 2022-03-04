import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const Payments = (props) => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$ form for something"
      amount={50}
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};
export default connect(null, actions)(Payments);

/**
 * const Payments = () => {

    return <StripeCheckout
        amount={}
        token={token=>console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        />
};

 */
