import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "../PaymentCard/PaymentCard";

const stripePromise = loadStripe(
  "pk_test_51J2pQNCW5oM4XZ6BAiuzTmlSFYtH7LSYWRPPpdmoBgKooupA7YH73IWIGROhGINfCH4A7zINpHlWsajs5gXi8tJ700xEBMAbtW"
);

const Payment = ({handelPayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard handelPayment={handelPayment}/>
    </Elements>
  );
};

export default Payment;
