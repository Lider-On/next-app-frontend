import LoginForm from "../components/login";

import './login.css';

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center" id="login-screen">
        <LoginForm></LoginForm>
    </div>
  );
}
