import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51JG3lABxb2QbyMuJJGOjq8YPFc63mEWXPSetmLUsaMf1BXQgdru5vAMHSQmQegC27F5QXtSkuUiWg7dFdB4YIhq4009x2Y7oAo");
const successMessage = () => {
  return (
    <>
    <br/>
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            {/* <CheckIcon className="w-12 h-12 flex-shrink-0 text-green-600" /> */}
            <span>Successfull payment!</span>
          </h2>
          <p className="text-lg mt-3">Check your emails for the receipt.</p>
        </div>
      </div>
    </>
  )
};

function SecondStep() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  
  return (
    <div className="container">
      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-7 order-md-1">
          <Elements stripe={stripePromise}>
              <CheckoutForm amount={20} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>

    </div>
  );
}


export default SecondStep;