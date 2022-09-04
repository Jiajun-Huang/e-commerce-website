import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "../authentication/authentication.style.scss";
const Auth = () => {
  return (
    <div className="auth-container">
      <SignUpForm></SignUpForm>
      <SignInForm></SignInForm>
    </div>
  );
};

export default Auth;
