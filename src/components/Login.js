import Input from './Input.js';

function Login () {
  return (
    <form class="login">
      <Input inputType="email" />
      <Input inputType="password" />
    </form>
  );
}

export default Login;