import InfoToolTip from './InfoToolTip.js';

function InfoPopup (props) {
  return (
    <div className={`popup popup-${props.name} root__popup ${props.state.open ? 'popup_opened' : ''}`}>
      <InfoToolTip infoModifier={infoModifier} state={props.state} message={props.message} />
    </div>
  );
}

export default InfoPopup;