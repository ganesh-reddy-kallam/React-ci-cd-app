import React from "react";
import Stripe from "stripe";

const stripe = Stripe("YOUR_STRIPE_API_KEY"); // initialize Stripe with your API key

class BuyNowButton extends React.Component {
  handleBuyNow = async () => {
    // Call your server to create a Stripe Checkout Session
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    // Handle any errors from the redirect
    if (result.error) {
      console.error(result.error);
    } else {
      // Payment successfully completed
      this.props.unlockContent();
    }
  };

  render() {
    return <button onClick={this.handleBuyNow}>Buy Now</button>;
  }
}

export default BuyNowButton;
