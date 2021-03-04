import React from 'react';

import Header from './Header.js';
import ScreenForm from '../Forms/ScreenForm.js';

function Login (props) {
  return (
    <div className="container root__container">
      <Header place="login" userEmail={props.userEmail} />
      <ScreenForm
        form="login"
        onSubmit={props.onLogin}
        infoPopupState={props.infoPopupState}
        onPopupClose={props.onPopupClose}
      />
    </div>
  );
}

export default Login;