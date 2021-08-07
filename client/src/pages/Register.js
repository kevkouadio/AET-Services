import React, {useState, useEffect} from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import Header from '../components/Header';

const stripePromise = loadStripe("pk_test_51JG3lABxb2QbyMuJJGOjq8YPFc63mEWXPSetmLUsaMf1BXQgdru5vAMHSQmQegC27F5QXtSkuUiWg7dFdB4YIhq4009x2Y7oAo");
const successMessage = () => {
  return (
    <>
    <br/>
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            <span>Successfull payment!</span>
            <br/>
            <span>You've completed your registration process</span>
          </h2>
          <p className="text-lg mt-3">Check your emails for the receipt.</p>
          <a href="/" className="btn btn-primary">Retun to the home page</a>
        </div>
      </div>
    </>
  )
};

const Register = () => {
  
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="card">
      <Header />
      {paymentCompleted ? successMessage() : <React.Fragment>
        <div className="col-md-7 order-md-1">
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={20} setPaymentCompleted={setPaymentCompleted} />
        </Elements>
        </div>
      </React.Fragment>}
    </div>
  );
};

export default Register;