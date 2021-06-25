import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentCard = ({ handelPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess("");
    } else {
      setPaymentError("");
      setPaymentSuccess(paymentMethod.id);
      handelPayment(paymentMethod.id);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button
            className="btn brand-btn mt-3"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
      </div>
      <div>
        {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
        {paymentSuccess && (
          <p style={{ color: "green" }}>Your payment successfully completed</p>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
