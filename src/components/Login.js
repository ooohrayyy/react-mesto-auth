import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Login (props) {
  return (
    <div className="container root__container">
      <Header place="login" userEmail={props.userEmail} />
      <ScreenForm form="login" infoPopupState={props.infoPopupState} onSubmit={props.onLoginSubmit} onPopupClose={props.onPopupClose} />
    </div>
  );
}

export default Login;