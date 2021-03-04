import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Register (props) {
  return (
    <div className="container root__container">
      <Header place="register" userEmail={props.userEmail} />
      <ScreenForm
        form="register"
        infoPopupState={props.infoPopupState}
        onSubmit={props.onRegisterSubmit}
        onPopupClose={props.onPopupClose}
      />
    </div>
  );
}

export default Register;