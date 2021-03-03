import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Register () {
  return (
    <>
      <Header place="register" />
      <ScreenForm form="register" />
    </>
  );
}

export default Register;