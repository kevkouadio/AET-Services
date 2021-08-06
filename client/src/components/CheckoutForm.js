import React, { useState, useEffect } from 'react';
import {
  useStripe, useElements,
  CardNumberElement, CardExpiryElement, CardCvcElement
} from '@stripe/react-stripe-js';
import { stripePaymentMethodHandler } from './script';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
//import Select from 'react-select';
//import {Select, SubjectSelect} from './Form';
import { Input, Select, FormBtn, SubjectSelect } from "./Form";
//import { RHFInput } from 'react-hook-form-input';
import API from "../utils/API";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm(props) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const { user } = props;
  const { register, errors } = useForm({
    // defaultValues: {
    //   first_name: user.first_name,
    //   last_name: user.last_name,
    //   birthdate: user.birthdate,
    //   email: user.user_email,
    //   grade: user.grade,
    //   subject: user.subject
    // }
  });

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
  
   // Handles updating component state when the user types into the input field
   function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);
    setErrorMsg('');
 
    const paymentMethodObj = {
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name,
        email
      },
    };
    const paymentMethodResult = await stripe.createPaymentMethod(paymentMethodObj);
 
    stripePaymentMethodHandler({
      result: paymentMethodResult,
      amount: props.amount
    }, handleResponse);
  };
 
  // callback method to handle the response
  const handleResponse = response => {
    setLoading(false);
    if (response.error) {
      setErrorMsg(typeof response.error === 'string' ? response.error : response.error.message);
      return;
    }
    props.setPaymentCompleted(response.success ? true : false);
    onSubmit();
  };

  const onSubmit = () => {
    var data = {
      first_name: formObject.first_name,
      last_name: formObject.last_name,
      birthdate: formObject.birthdate,
      grade: formObject.grade,
      subject: formObject.subject
    };
    console.log(data);
    API.saveBook({
      first_name: formObject.first_name,
      last_name: formObject.last_name,
      birthdate: formObject.birthdate,
      grade: formObject.grade,
      subject: formObject.subject
    })
      .then(res => loadBooks())
      .catch(err => console.log(err));
  };
  
  const current = new Date().toISOString().split("T")[0];
  //const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <React.Fragment>
      <div className="col-md-11 offset-md-5">
      <form className="input-form" onSubmit={handleSubmit}>
      {/* <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            ref={register({
              required: 'First name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First name should contain only characters.'
              }
            })}
            className={`${errors.first_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            ref={register({
              required: 'Last name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last name should contain only characters.'
              }
            })}
            className={`${errors.last_name ? 'input-error' : ''}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="date-of-bitrh">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="birthdate"
            placeholder="select your date of birth"
            autoComplete="off"
            value={current.birthdate} 
            max={current}
            ref={register({
              required: 'date of birth is required.',
              pattern: {
                message: 'please select your date of birth.'
              }
            })}
            className={`${errors.birthdate ? 'input-error' : ''}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.birthdate.message}</p>
          )}
        </Form.Group> */}

<Input
                onChange={handleInputChange}
                name="first_name"
                placeholder="First name"
              />
              
              <Input
                onChange={handleInputChange}
                name="last_name"
                placeholder="Last Name"
              />
              
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control 
            className="form-group col-md-12"
            onChange={handleInputChange}
            type="date"
            name="birthdate"
            placeholder="select your date of birth"
            autoComplete="off"
            max={current}
            />
              
            <Select 
            name="grade"
            onChange={handleInputChange}/>
            <br/>
            
            <SubjectSelect
            name="subject" 
            onChange={handleInputChange}/>

            <br/>
            {/* payment information */}
            <label htmlFor="cc-name">Name on card</label>
            <input
              id="cc-name"
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            
            <label htmlFor="cc-email">Email</label>
            <input
              id="cc-email"
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="cc-number">Card Number</label>
            <CardNumberElement
              id="cc-number"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expiry">Expiration Date</label>
              <CardExpiryElement
                id="expiry"
                className="form-control"
                options={CARD_ELEMENT_OPTIONS}
              />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement
              id="cvc"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"></div> : `Pay $${props.amount} and register`}
        </button>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
      </form>
      </div>
    </React.Fragment>
  );
}