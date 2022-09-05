import { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // **HIGHLIGHT** spread the formFields and only change the changed value
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetForm();
      console.log("123123");
      alert("Successfully signed in");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Incorrect email or account is not exit");
          break;

        case "auth/wrong-password":
          alert("Incorrect password");
          break;

        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="submit" onSubmit={handleOnSubmit}>
        <FormInput
          label={"Email"}
          labelFor={"sign-in-email"}
          type="email"
          required
          id="sign-in-email"
          value={email}
          name="email"
          onChange={handleChange}
        ></FormInput>

        <FormInput
          label={"Password"}
          labelFor={"sign-in-password"}
          type="password"
          required
          id="sign-in-password"
          value={password}
          name="password"
          onChange={handleChange}
        ></FormInput>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
