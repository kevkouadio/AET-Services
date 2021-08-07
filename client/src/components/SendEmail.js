import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SendEmail() {

  const [formObject, setFormObject] = useState({})

  const notify = () => toast.success("Message sent, We will get back to you shortly.", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_nuo8nyp', 'template_dg331nr', e.target, 'user_rdfOXx7Nnrnex29ZxAMhD')
      .then((result) => {
        notify(result.text)
        setTimeout(function() {
          document.location.reload()
        }, 5000); 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
      <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input onChange={handleInputChange} type="text" name="from_name" className="form-control" id="exampleFormControlInput1" placeholder="John Snow"/>
      </div>
      <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone</label>
          <input onChange={handleInputChange} type="text" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="999 999 9999"/>
      </div>
      <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea onChange={handleInputChange} name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <input className="btn btn-primary" type="submit" value="Send" disabled={!(formObject.from_name && formObject.email && formObject.phone && formObject.message)}/>
      </form>
      <ToastContainer />
    </>
  );
}