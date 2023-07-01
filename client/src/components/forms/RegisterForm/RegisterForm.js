import React, { useState, useEffect } from "react";

import TextInput from "../TextInput/TextInput.js";
import { defaultRegisterValues } from "../defaultValues.js";
import { validateField } from "./validator.js";
import { validateAllFields } from "../validators.js";
import "./RegisterForm.scss";
import "../form.scss";

const RegisterForm = () => {
  const [formValues, setFormValues] = useState(defaultRegisterValues);

  const [formErrors, setFormErrors] = useState({});

  const onInputChange = (fieldName, fieldValue) => {
    setFormValues((prevState) => {
      return { ...prevState, [fieldName]: fieldValue };
    });
  };

  return (
    <form
      className="RegisterForm Form"
      onSubmit={(e) => {
        e.preventDefault();
        validateAllFields(validateField, formValues, setFormErrors);
      }}
    >
      <div className="Form__upper-style"></div>
      <h1 className="Form__header">Register</h1>
      <div className="Form__double-group">
        <TextInput
          type="text"
          id="first-name"
          label="First Name*"
          name="firstName"
          value={formValues.firstName}
          onChange={(e) => {
            onInputChange("firstName", e.target.value);
          }}
          onBlur={() => {
            const errors = validateField(
              formValues,
              { ...formErrors },
              "firstName"
            );
            setFormErrors(errors);
          }}
          error={formErrors.firstName}
        />
        <TextInput
          type="text"
          id="last-name"
          label="Last Name*"
          name="lastName"
          value={formValues.lastName}
          error={formErrors.lastName}
          onChange={(e) => {
            onInputChange("lastName", e.target.value);
          }}
          onBlur={() => {
            const errors = validateField(
              formValues,
              { ...formErrors },
              "lastName"
            );
            setFormErrors(errors);
          }}
        />
      </div>

      <div className="Form__double-group">
        <TextInput
          type="text"
          id="email"
          label="Email*"
          name="email"
          value={formValues.email}
          error={formErrors.email}
          onChange={(e) => {
            onInputChange("email", e.target.value);
          }}
          onBlur={() => {
            const errors = validateField(
              formValues,
              { ...formErrors },
              "email"
            );
            setFormErrors(errors);
          }}
        />
        <TextInput
          type="text"
          id="phone"
          label="Phone*"
          name="phone"
          value={formValues.phone}
          error={formErrors.phone}
          onChange={(e) => {
            onInputChange("phone", e.target.value);
          }}
          onBlur={() => {
            const errors = validateField(
              formValues,
              { ...formErrors },
              "phone"
            );
            setFormErrors(errors);
          }}
        />
      </div>

      <div className="Form__double-group">
        <TextInput
          type="text"
          id="username"
          label="Username*"
          name="username"
          value={formValues.username}
          error={formErrors.username}
          onChange={(e) => {
            onInputChange("username", e.target.value);
          }}
          onBlur={() => {
            const errors = validateField(
              formValues,
              { ...formErrors },
              "username"
            );
            setFormErrors(errors);
          }}
        />
        <TextInput
          type="text"
          id="password"
          label="Password*"
          name="password"
          value={formValues.password}
          error={formErrors.password}
          onChange={(e) => {
            onInputChange("password", e.target.value);
          }}
          onBlur={() => {
            const errors = validateField(
              formValues,
              { ...formErrors },
              "password"
            );
            setFormErrors(errors);
          }}
        />
      </div>

      <button className="button-main button-main--primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
