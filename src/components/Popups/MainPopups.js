import React from 'react';

import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmDeletePopup from './ConfirmDeletePopup.js';
import ImagePopup from "./ImagePopup.js";

function MainPopups (props) {
  const {
    selectedCard,
    editProfileState,
    editAvatarState,
    addPlaceState,
    confirmDeleteState,
    imagePopupState,
    onUpdateUser,
    onUpdateAvatar,
    onAddPlaceSubmit,
    onDeleteConfirmation,
    onClose
  } = props.popupProps;


  return (
    <>
      <EditProfilePopup
        state={editProfileState}
        initialValidityState={true}
        onUpdateUser={onUpdateUser}
        onClose={onClose}
      />
      <EditAvatarPopup
        state={editAvatarState}
        initialValidityState={false}
        onUpdateAvatar={onUpdateAvatar}
        onClose={onClose}
      />
      <AddPlacePopup
        state={addPlaceState}
        initialValidityState={false}
        onAddPlaceSubmit={onAddPlaceSubmit}
        onClose={onClose}
      />
      <ConfirmDeletePopup
        card={selectedCard}
        state={confirmDeleteState}
        initialValidityState={true}
        onDeleteConfirmation={onDeleteConfirmation}
        onClose={onClose}
      />
      <ImagePopup card={selectedCard} state={imagePopupState} onClose={onClose} />
    </>
  );
}

export default MainPopups;