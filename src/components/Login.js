import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Login (props) {
  return (
    <div className="container root__container">
      <Header place="login" />
      <ScreenForm form="login" infoPopupState={props.infoPopupState} onPopupClose={props.onPopupClose} />
    </div>
  );
}

export default Login;