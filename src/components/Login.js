import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Login (props) {
  return (
    <>
      <Header place="login" />
      <ScreenForm form="login" infoPopupState={props.infoPopupState} onPopupClose={props.onPopupClose} />
    </>
  );
}

export default Login;