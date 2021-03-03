import React from 'react';

import Header from './Header.js';
import ScreenForm from './ScreenForm.js';

function Register (props) {
  return (
    <div className="container root__container">
      <Header place="register" />
      <ScreenForm form="register" infoPopupState={props.infoPopupState} onPopupClose={props.onPopupClose} />
    </div>
  );
}

export default Register;