import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmDeletePopup from './ConfirmDeletePopup.js';
import ImagePopup from "./ImagePopup.js";

function Popups (props) {
  return (
    <>
      <EditProfilePopup
        state={props.editProfileState}
        initialValidityState={true}
        onUpdateUser={props.onUpdateUser}
        onClose={props.onClose}
      />
      <EditAvatarPopup
        state={props.editAvatarState}
        initialValidityState={false}
        onUpdateAvatar={props.onUpdateAvatar}
        onClose={props.onClose}
      />
      <AddPlacePopup
        state={props.addPlaceState}
        initialValidityState={false}
        onAddPlaceSubmit={props.onAddPlaceSubmit}
        onClose={props.onClose}
      />
      <ConfirmDeletePopup
        card={props.selectedCard}
        state={props.confirmDeleteState}
        initialValidityState={true}
        onDeleteConfirmation={props.onDeleteConfirmation}
        onClose={props.onClose}
      />
      <ImagePopup card={props.selectedCard} state={props.imagePopupState} onClose={props.onClose} />
    </>
  );
}

export default Popups;