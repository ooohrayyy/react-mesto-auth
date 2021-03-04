import React from 'react';

import Header from './Header.js';
import ScreenForm from '../Forms/ScreenForm.js';

function Register (props) {
  return (
    <div className="container root__container">
      <Header place="register" userEmail={props.userEmail} />
      <ScreenForm
        form="register"
        onSubmit={props.onRegister}
        infoPopupState={props.infoPopupState}
        onPopupClose={props.onPopupClose}
      />
    </div>
  );
}

export default Register;