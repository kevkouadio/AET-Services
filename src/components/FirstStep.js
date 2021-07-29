import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { RHFInput } from 'react-hook-form-input';



const FirstStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      middle_name: user.middle_name,
      birthdate: user.birthdate,
      user_email: user.user_email,
      user_password: user.user_password,
      grade: user.grade
    }
  });
  

  const onSubmit = (data) => {
    props.updateUser(data);
    props.history.push('/second');
    console.log(data);
  };
  const current = new Date().toISOString().split("T")[0];
 
  const actions = [
    { label: "1st", value: "1st" },
    { label: "2nd", value: "2nd" },
    { label: "3rd", value: "3rd" },
    { label: "4th", value: "4th" },
    { label: "5th", value: "5th" },
    { label: "6th", value: "6th" },
    { label: "7th", value: "7th" },
    { label: "8th", value: "8th" },
    { label: "9th", value: "9th" },
    { label: "10th", value: "10th" },
    { label: "11th", value: "11th" },
    { label: "12th", value: "12th" }
  ];

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
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

        <Form.Group controlId="middle_name">
        <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            name="middle_name"
            placeholder="Enter your middle name"
            autoComplete="off"
            ref={register({
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'middle name should contain only characters.'
              }
            })}
            className={`${errors.middle_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.message}</p>
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
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a password"
            autoComplete="off"
            ref={register({
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should have at-least 6 characters.'
              }
            })}
            className={`${errors.user_password ? 'input-error' : ''}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password.message}</p>
          )}
        </Form.Group>

        <Form.Label>Grade</Form.Label>
          <Form.Group controlId="Grade"> 
          <RHFInput 
            as={<Select options={actions} />}
            rules={{ required: 'Please select an option'}}
            placeholder= "Select your grade"
            name="grade"
            register={register}
            setValue={setValue}
          />
            {errors.grade && (
                <p className="errorMsg">{errors.grade && errors.grade.type === 'required' && "Please select your grade"}</p>
              )}
        </Form.Group>
            
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default FirstStep;