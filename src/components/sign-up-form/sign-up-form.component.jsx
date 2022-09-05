import { useState } from "react";
import {
  createAuthUserWithAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // HIGHLIGHT spread the formFields and only change the changed value
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithAndPassword(email, password);
        await createUserDocumentFromAuth(user, { displayName });
        resetForm();
        alert("Successfully signed up");
      } catch (error) {
        if (error.code === "auth/email-already-in-use")
          alert("Cannot create user, email already in use");
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="submit" onSubmit={handleOnSubmit}>
        <FormInput
          label={"Display Name"}
          labelFor={"sign-up-displayName"}
          type="text"
          required
          id="sign-up-displayName"
          value={displayName}
          name="displayName"
          onChange={handleChange}
        ></FormInput>

        <FormInput
          label={"Email"}
          labelFor={"sign-up-email"}
          type="email"
          required
          id="sign-up-email"
          value={email}
          name="email"
          onChange={handleChange}
        ></FormInput>

        <FormInput
          label={"Password"}
          labelFor={"sign-up-password"}
          type="password"
          required
          id="sign-up-password"
          value={password}
          name="password"
          onChange={handleChange}
        ></FormInput>

        <FormInput
          label={"Confirm Password"}
          labelFor={"sign-up-confirmPassword"}
          type="password"
          required
          id="sign-up-confirmPassword"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        ></FormInput>

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
