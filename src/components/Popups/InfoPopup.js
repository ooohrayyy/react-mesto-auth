import InfoToolTip from '../Forms/InfoToolTip.js';

import usePopupListeners from '../../utils/usePopupListeners.js';

function InfoPopup (props) {
  usePopupListeners(props); // * Хук слушателей для попапа

  return (
    <div className={`popup popup-info root__popup ${props.state.open ? 'popup_opened' : ''}`}>
      <div className='popup__tooltip'>
        {(!props.state.loading && !props.state.success) &&
        (<button className="close-btn close-btn_place_form" type="button" onClick={props.onClose} />)}
        <InfoToolTip infoModifier="info_place_screen" state={props.state} />
      </div>
    </div>
  );
}

export default InfoPopup;