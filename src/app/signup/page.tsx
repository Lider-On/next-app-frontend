import SignUpForm from "../components/signup";

import './signup.css';

export default function SignUp() {
  return (
    <div className="w-screen h-screen flex justify-center items-center" id="signup-screen">
        <SignUpForm></SignUpForm>
    </div>
  );
}
