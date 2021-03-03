import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Login () {
  return (
    <>
      <Header place="login" />
      <ScreenForm form="login" />
    </>
  );
}

export default Login;