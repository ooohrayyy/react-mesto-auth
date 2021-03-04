(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),o=a.n(i),c=a(21),s=a.n(c),r=a(9),l=a(23),u=a(2),d=a(3),p=a(4),j=a(14),b=a(15),f=new(function(){function e(t){Object(j.a)(this,e),this._baseUrl=t.baseUrl}return Object(b.a)(e,[{key:"_checkResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"register",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then((function(e){return t._checkResponseData(e)}))}},{key:"authorize",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then((function(e){return t._checkResponseData(e)}))}},{key:"checkCredentials",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkResponseData(e)}))}}]),e}())({baseUrl:"https://auth.nomoreparties.co"}),h=new(function(){function e(t){Object(j.a)(this,e),this._baseUrl=t.baseUrl,this._token=t.authorization,this.deleteCard=this.deleteCard.bind(this),this.toggleLike=this.toggleLike.bind(this)}return Object(b.a)(e,[{key:"_checkResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"fetchUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._checkResponseData(t)}))}},{key:"fetchInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._checkResponseData(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.description})}).then((function(e){return t._checkResponseData(e)}))}},{key:"postCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponseData(e)}))}},{key:"toggleLike",value:function(e,t){var a=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then((function(e){return a._checkResponseData(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",authorization:"21765504-482c-4ec0-96f1-ca3e4078b259"}),m=a(24);var O=function(e){var t=e.component,a=Object(m.a)(e,["component"]);return Object(n.jsx)(p.b,{children:a.loggedIn?Object(n.jsx)(t,Object(u.a)({},a)):Object(n.jsx)(p.a,{to:"./sign-in"})})},_=a.p+"static/media/logo.a307e1c4.svg";var g=function(e){var t=o.a.useState(!1),a=Object(d.a)(t,2),i=a[0],c=a[1],s={text:"register"===e.place?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",url:"register"===e.place?"./sign-in":"./sign-up"},l=i?"header__menu-btn header__menu-btn_close":"header__menu-btn";return Object(n.jsxs)("header",{className:"container__header header",children:["main"===e.place&&i&&Object(n.jsxs)("menu",{className:"header__menu",children:[Object(n.jsx)("p",{className:"header__email header__email_place_menu",children:e.userEmail}),Object(n.jsx)("button",{className:"header__out header__out_place_menu",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(n.jsxs)("div",{className:"header__body",children:[Object(n.jsx)("img",{className:"header__logo",src:_,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"}),"main"===e.place&&Object(n.jsx)("p",{className:"header__email header__email_place_body",children:e.userEmail}),"main"===e.place&&Object(n.jsx)("button",{className:"header__out header__out_place_body",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"}),"main"===e.place&&Object(n.jsx)("button",{className:l,onClick:function(){c(!i)}}),"main"!==e.place&&Object(n.jsx)(r.b,{className:"header__link",to:s.url,children:s.text})]})]})};var v=function(e){var t=o.a.useState(""),a=Object(d.a)(t,2),i=a[0],c=a[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"form__input input ".concat(e.inputModifier||""," ").concat(e.inputValidityState?"":"input_invalid"),type:e.inputType,name:e.inputName,value:e.inputValue,placeholder:e.inputPlaceholder,minLength:e.inputMinLength||"2",maxLength:e.inputMaxLength||"40",autoComplete:"off",required:!0,onChange:function(t){e.onValueChange(t),e.onInputValidityChange(t.target.validity.valid),c(t.target.validationMessage)}}),!e.inputValidityState&&Object(n.jsx)("span",{className:"input__error",children:i})]})},x=a.p+"static/media/info-loader.1f235894.svg",C=a.p+"static/media/info-success.1b6082f8.svg",S=a.p+"static/media/info-error.df8eddf6.svg";var k=function(e){var t;return e.state.loading?t=x:e.state.success?t=C:e.state.failed&&(t=S),Object(n.jsxs)("div",{className:"info ".concat(e.infoModifier),children:[Object(n.jsx)("img",{className:"info__img",src:t,alt:"\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),Object(n.jsx)("h3",{className:"info__text",children:e.state.loading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":e.state.message})]})};var y=function(e){var t=e.state,a=t.open,n=t.loading,i=t.failed,c=e.onClose,s=void 0!==e.state.success?!n:!n&&!i,r=o.a.useCallback((function(e){"Escape"===e.key&&s&&c()}),[s,c]),l=o.a.useCallback((function(e){e.target.classList.contains("popup")&&s&&c()}),[s,c]),u=o.a.useCallback((function(){document.addEventListener("keydown",r),document.addEventListener("click",l)}),[r,l]),d=o.a.useCallback((function(){document.removeEventListener("keydown",r),document.removeEventListener("click",l)}),[r,l]);o.a.useEffect((function(){return a&&u(),function(){a&&d()}}),[a,u,d])};var N=function(e){return y(e),Object(n.jsx)("div",{className:"popup popup-info root__popup ".concat(e.state.open?"popup_opened":""),children:Object(n.jsxs)("div",{className:"popup__tooltip",children:[!e.state.loading&&!e.state.success&&Object(n.jsx)("button",{className:"close-btn close-btn_place_form",type:"button",onClick:e.onClose}),Object(n.jsx)(k,{infoModifier:"info_place_screen",state:e.state})]})})};var P=function(e){var t=o.a.useState(""),a=Object(d.a)(t,2),i=a[0],c=a[1],s=o.a.useState(""),l=Object(d.a)(s,2),u=l[0],p=l[1],j=o.a.useState(!1),b=Object(d.a)(j,2),f=b[0],h=b[1],m=o.a.useState(!0),O=Object(d.a)(m,2),_=O[0],g=O[1],x=o.a.useState(!0),C=Object(d.a)(x,2),S=C[0],k=C[1],y="register"===e.form?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u0445\u043e\u0434",P="register"===e.form?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0412\u043e\u0439\u0442\u0438";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:"form form_place_screen",noValidate:!0,onChange:function(e){h(e.currentTarget.checkValidity())},onSubmit:function(t){t.preventDefault(),e.onSubmit({password:u,email:i})},children:[Object(n.jsx)("h1",{className:"form__heading form__heading_place_screen",children:y}),Object(n.jsx)(v,{inputModifier:"input_place_screen",inputName:"login_email",inputValue:i,inputType:"email",inputPlaceholder:"Email",inputValidityState:_,onInputValidityChange:g,onValueChange:function(e){c(e.target.value)}}),Object(n.jsx)(v,{inputModifier:"input_place_screen",inputName:"login_password",inputValue:u,inputType:"password",inputPlaceholder:"\u041f\u0430\u0440\u043e\u043b\u044c",inputMinLength:"6",inputValidityState:S,onInputValidityChange:k,onValueChange:function(e){p(e.target.value)}}),Object(n.jsx)("button",{className:"form__button button button_place_screen",type:"submit",disabled:!f,children:P})]}),"register"===e.form&&Object(n.jsx)(r.b,{className:"container__sign-in",to:"./sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? \u0412\u043e\u0439\u0442\u0438"}),Object(n.jsx)(N,{state:e.infoPopupState,onClose:e.onPopupClose})]})};var V=function(e){return Object(n.jsxs)("div",{className:"container root__container",children:[Object(n.jsx)(g,{place:"login",userEmail:e.userEmail}),Object(n.jsx)(P,{form:"login",onSubmit:e.onLogin,infoPopupState:e.infoPopupState,onPopupClose:e.onPopupClose})]})};var E=function(e){return Object(n.jsxs)("div",{className:"container root__container",children:[Object(n.jsx)(g,{place:"register",userEmail:e.userEmail}),Object(n.jsx)(P,{form:"register",onSubmit:e.onRegister,infoPopupState:e.infoPopupState,onPopupClose:e.onPopupClose})]})},T=o.a.createContext();var U=function(e){var t=o.a.useContext(T),a=o.a.useState(!1),i=Object(d.a)(a,2),c=i[0],s=i[1],r=e.item;r.alt=r.name,r.caption="".concat(r.alt," / \xa9 ").concat(r.owner.name),r.isOwn=r.owner._id===t._id,r.isLiked=r.likes.some((function(e){return e._id===t._id}));var l="card__like ".concat(r.isLiked?"card__like_active":"");return o.a.useEffect((function(){s(!1)}),[e]),Object(n.jsxs)("article",{className:"card",children:[Object(n.jsx)("button",{className:"card__open-fullpic",type:"button",onClick:function(){e.onCardClick(r)},children:Object(n.jsx)("img",{className:"card__image",src:r.link,alt:r.alt})}),r.isOwn&&Object(n.jsx)("button",{className:"card__delete",type:"button",onClick:function(){e.onCardDelete(r)}}),Object(n.jsxs)("div",{className:"card__label",children:[Object(n.jsx)("h2",{className:"card__name",children:r.name}),!c&&Object(n.jsx)("button",{className:l,type:"button",onClick:function(){s(!0),e.onCardLike(r)},children:Object(n.jsx)("p",{className:"card__counter",children:r.likes.length})}),c&&Object(n.jsx)("button",{className:"card__loader",disabled:!0})]})]},e.i)};var L=function(){return Object(n.jsx)("footer",{className:"container__footer footer",children:Object(n.jsx)("p",{className:"footer__text",children:"\xa9 2021 Mesto Russia"})})};var D=function(e){y(e);var t="delete"===e.name?"info_place_delete":"info_place_popup";return Object(n.jsx)("div",{className:"popup popup-".concat(e.name," root__popup ").concat(e.state.open?"popup_opened":""),children:Object(n.jsxs)("form",{className:"form form_place_popup",name:e.name,noValidate:!0,onChange:function(t){e.onFormValidityChange(t.currentTarget.checkValidity())},onSubmit:e.onSubmit,children:[!e.state.loading&&!e.state.failed&&Object(n.jsx)("button",{className:"close-btn close-btn_place_form",type:"button",onClick:e.onClose}),e.state.failed&&Object(n.jsx)("button",{className:"form__refresh",type:"button",onClick:function(){window.location.reload()}}),Object(n.jsx)("h2",{className:"form__heading ".concat("delete"===e.name?"form__heading_place_delete":""),children:e.heading}),!e.state.loading&&!e.state.failed&&e.children,!e.state.loading&&!e.state.failed&&Object(n.jsx)("button",{className:"form__button button ".concat("delete"===e.name?"button_place_delete":""),type:"submit",disabled:!e.formValidityState,children:"delete"===e.name?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(e.state.loading||e.state.failed)&&Object(n.jsx)(k,{infoModifier:t,state:e.state})]})})};var w=function(e){var t=o.a.useState(""),a=Object(d.a)(t,2),i=a[0],c=a[1],s=o.a.useState(!1),r=Object(d.a)(s,2),l=r[0],u=r[1],p=o.a.useState(!0),j=Object(d.a)(p,2),b=j[0],f=j[1];return Object(n.jsx)(D,{state:e.state,formValidityState:l,onFormValidityChange:u,name:"avatar",heading:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(i),c(""),f(!0),u(!1)},onClose:function(){e.onClose(),c(""),f(!0),u(!1)},children:Object(n.jsx)(v,{inputName:"avatar",inputValue:i,inputType:"url",inputPlaceholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",inputMaxLength:"200",inputValidityState:b,onInputValidityChange:f,onValueChange:function(e){c(e.target.value)}})})};var I=function(e){var t=o.a.useContext(T),a=o.a.useState(""),i=Object(d.a)(a,2),c=i[0],s=i[1],r=o.a.useState(""),l=Object(d.a)(r,2),u=l[0],p=l[1],j=o.a.useState(!0),b=Object(d.a)(j,2),f=b[0],h=b[1],m=o.a.useState(!0),O=Object(d.a)(m,2),_=O[0],g=O[1],x=o.a.useState(!0),C=Object(d.a)(x,2),S=C[0],k=C[1];return o.a.useEffect((function(){s(t.name),p(t.about)}),[t]),Object(n.jsxs)(D,{state:e.state,formValidityState:f,onFormValidityChange:h,name:"profile",heading:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,description:u}),h(!0)},onClose:function(){e.onClose(),s(t.name),p(t.about),g(!0),k(!0),h(!0)},children:[Object(n.jsx)(v,{inputType:"text",inputName:"name",inputValue:c,inputPlaceholder:"\u0418\u043c\u044f",inputValidityState:_,onInputValidityChange:g,onValueChange:function(e){s(e.target.value)}}),Object(n.jsx)(v,{inputModifier:"input_description",inputType:"text",inputName:"description",inputValue:u,inputPlaceholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",inputMaxLength:"200",inputValidityState:S,onInputValidityChange:k,onValueChange:function(e){p(e.target.value)}})]})};var A=function(e){var t=o.a.useState(""),a=Object(d.a)(t,2),i=a[0],c=a[1],s=o.a.useState(""),r=Object(d.a)(s,2),l=r[0],u=r[1],p=o.a.useState(!1),j=Object(d.a)(p,2),b=j[0],f=j[1],h=o.a.useState(!0),m=Object(d.a)(h,2),O=m[0],_=m[1],g=o.a.useState(!0),x=Object(d.a)(g,2),C=x[0],S=x[1];return Object(n.jsxs)(D,{state:e.state,formValidityState:b,onFormValidityChange:f,name:"card",heading:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onSubmit:function(t){t.preventDefault(),e.onAddPlaceSubmit({name:i,link:l}),c(""),u(""),_(!0),S(!0),f(!1)},onClose:function(){e.onClose(),c(""),u(""),_(!0),S(!0),f(!1)},children:[Object(n.jsx)(v,{inputType:"text",inputName:"place",inputValue:i,inputPlaceholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",inputMaxLength:"30",inputValidityState:O,onInputValidityChange:_,onValueChange:function(e){c(e.target.value)}}),Object(n.jsx)(v,{inputModifier:"input_card-link",inputType:"url",inputName:"link",inputValue:l,inputPlaceholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",inputMaxLength:"200",inputValidityState:C,onInputValidityChange:S,onValueChange:function(e){u(e.target.value)}})]})};var M=function(e){return Object(n.jsx)(D,{state:e.state,formValidityState:e.initialValidityState,name:"delete",heading:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onSubmit:function(t){t.preventDefault(),e.onDeleteConfirmation(e.card)},onClose:e.onClose})};var R=function(e){return y(e),Object(n.jsx)("div",{className:"popup popup-fullpic root__popup ".concat(e.state.open?"popup_opened":""),children:Object(n.jsxs)("figure",{className:"popup__figure",children:[e.card&&Object(n.jsx)("button",{className:"close-btn close-btn_place_fullpic",type:"button",onClick:e.onClose}),Object(n.jsx)("img",{className:"popup__fullpic",src:e.card?e.card.link:null,alt:e.card?e.card.alt:null}),Object(n.jsx)("figcaption",{className:"popup__caption",children:e.card?e.card.caption:null})]})})};var z=function(e){var t=e.popupProps,a=t.selectedCard,i=t.editProfileState,o=t.editAvatarState,c=t.addPlaceState,s=t.confirmDeleteState,r=t.imagePopupState,l=t.onUpdateUser,u=t.onUpdateAvatar,d=t.onAddPlaceSubmit,p=t.onDeleteConfirmation,j=t.onClose;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{state:i,initialValidityState:!0,onUpdateUser:l,onClose:j}),Object(n.jsx)(w,{state:o,initialValidityState:!1,onUpdateAvatar:u,onClose:j}),Object(n.jsx)(A,{state:c,initialValidityState:!1,onAddPlaceSubmit:d,onClose:j}),Object(n.jsx)(M,{card:a,state:s,initialValidityState:!0,onDeleteConfirmation:p,onClose:j}),Object(n.jsx)(R,{card:a,state:r,onClose:j})]})},F=a.p+"static/media/avatar-loader.07e847c1.svg";var J=function(e){var t=o.a.useContext(T),a=e.mainProps,i=a.cards,c=a.onSignOut,s=a.onEditAvatar,r=a.onEditProfile,l=a.onAddPlace,u=a.onCardClick,d=a.onCardDelete,p=a.onCardLike;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"container root__container",children:[Object(n.jsx)(g,{place:"main",userEmail:e.userEmail,onSignOut:c}),Object(n.jsxs)("main",{className:"main container__main",children:[Object(n.jsxs)("section",{className:"profile main__profile",children:[Object(n.jsxs)("div",{className:"profile__main",children:[Object(n.jsx)("img",{className:"profile__avatar",src:t.avatar||F,alt:"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(n.jsx)("button",{className:"profile__avatar-button",onClick:s}),Object(n.jsxs)("div",{className:"profile__text-info",children:[Object(n.jsx)("h1",{className:"profile__name",children:t.name||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(n.jsx)("button",{className:"profile__edit",type:"button",onClick:r}),Object(n.jsx)("p",{className:"profile__description",children:t.about||"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"})]})]}),Object(n.jsx)("button",{className:"profile__add",type:"button",onClick:l})]}),Object(n.jsx)("section",{className:"cards main__cards",children:i.map((function(e){return Object(n.jsx)(U,{item:e,onCardClick:u,onCardDelete:d,onCardLike:p},e._id)}))})]}),Object(n.jsx)(L,{})]}),Object(n.jsx)(z,{popupProps:e.popupProps})]})};var B=function(){var e=o.a.useState(!1),t=Object(d.a)(e,2),a=t[0],i=t[1],c=o.a.useState({name:"",about:""}),s=Object(d.a)(c,2),r=s[0],j=s[1],b=o.a.useState(""),m=Object(d.a)(b,2),_=m[0],g=m[1],v=o.a.useState([]),x=Object(d.a)(v,2),C=x[0],S=x[1],k=o.a.useState({}),y=Object(d.a)(k,2),N=y[0],P=y[1],U=Object(p.g)(),L=o.a.useState({open:!1,success:!1,loading:!1,failed:!1,message:null}),D=Object(d.a)(L,2),w=D[0],I=D[1],A=o.a.useState({open:!1,loading:!1,failed:!1,message:null}),M=Object(d.a)(A,2),R=M[0],z=M[1],F=o.a.useState({open:!1,loading:!1,failed:!1,message:null}),B=Object(d.a)(F,2),G=B[0],H=B[1],q=o.a.useState({open:!1,loading:!1,failed:!1,message:null}),K=Object(d.a)(q,2),Q=K[0],W=K[1],X=o.a.useState({open:!1,loading:!1,failed:!1,message:null}),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1],ee=o.a.useState({open:!1,loading:!1,failed:!1,message:null}),te=Object(d.a)(ee,2),ae=te[0],ne=te[1];function ie(){I(Object(u.a)(Object(u.a)({},w),{},{open:!1})),z(Object(u.a)(Object(u.a)({},R),{},{open:!1})),H(Object(u.a)(Object(u.a)({},G),{},{open:!1})),W(Object(u.a)(Object(u.a)({},Q),{},{open:!1})),$(Object(u.a)(Object(u.a)({},Z),{},{open:!1})),ne(Object(u.a)(Object(u.a)({},ae),{},{open:!1})),P(null)}var oe={cards:C,onSignOut:function(){localStorage.removeItem("jwt"),i(!1),g(""),U.push("./sign-in")},onEditAvatar:function(){z(Object(u.a)(Object(u.a)({},R),{},{open:!0}))},onEditProfile:function(){H(Object(u.a)(Object(u.a)({},G),{},{open:!0}))},onAddPlace:function(){W(Object(u.a)(Object(u.a)({},Q),{},{open:!0}))},onCardClick:function(){P(this.item),ne(Object(u.a)(Object(u.a)({},ae),{},{open:!0}))},onCardDelete:function(){P(this.item),$(Object(u.a)(Object(u.a)({},Z),{},{open:!0}))},onCardLike:function(e){h.toggleLike(e._id,e.isLiked).then((function(t){var a=C.map((function(a){return a._id===e._id?t:a}));S(a)})).catch((function(e){console.log(e)}))}},ce={selectedCard:N,editProfileState:G,editAvatarState:R,addPlaceState:Q,confirmDeleteState:Z,imagePopupState:ae,onUpdateUser:function(e){H(Object(u.a)(Object(u.a)({},G),{},{loading:!0})),h.patchUserInfo(e).then((function(e){j(e),setTimeout((function(){H(Object(u.a)(Object(u.a)({},G),{},{open:!1,loading:!1}))}),400),ie()})).catch((function(e){console.log(e),H(Object(u.a)(Object(u.a)({},G),{},{loading:!1,failed:!0,message:e}))}))},onUpdateAvatar:function(e){z(Object(u.a)(Object(u.a)({},R),{},{loading:!0})),h.updateAvatar(e).then((function(e){j(e),setTimeout((function(){z(Object(u.a)(Object(u.a)({},R),{},{open:!1,loading:!1}))}),400),ie()})).catch((function(e){console.log(e),z(Object(u.a)(Object(u.a)({},R),{},{loading:!1,failed:!0,message:e}))}))},onAddPlaceSubmit:function(e){W(Object(u.a)(Object(u.a)({},Q),{},{loading:!0})),h.postCard(e).then((function(e){S([e].concat(Object(l.a)(C))),setTimeout((function(){W(Object(u.a)(Object(u.a)({},Q),{},{open:!1,loading:!1}))}),400),ie()})).catch((function(e){console.log(e),W(Object(u.a)(Object(u.a)({},Q),{},{loading:!1,failed:!0,message:e}))}))},onDeleteConfirmation:function(e){$(Object(u.a)(Object(u.a)({},Z),{},{loading:!0})),h.deleteCard(e._id).then((function(t){var a=C.filter((function(t){return t._id!==e._id}));S(a),setTimeout((function(){$(Object(u.a)(Object(u.a)({},Z),{},{open:!1,loading:!1}))}),400),ie()})).catch((function(e){console.log(e),$(Object(u.a)(Object(u.a)({},Z),{},{loading:!1,failed:!0,message:e}))}))},onClose:ie};return o.a.useEffect((function(){localStorage.jwt&&f.checkCredentials(localStorage.jwt).then((function(e){i(!0),g(e.data.email),U.push("./main")})).catch((function(e){return console.log(e)}))}),[U]),o.a.useEffect((function(){h.fetchUserInfo().then((function(e){j(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){h.fetchInitialCards().then((function(e){S(e)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)(T.Provider,{value:r,children:Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{path:"/sign-in",children:Object(n.jsx)(V,{userEmail:_,onLogin:function(e){I(Object(u.a)(Object(u.a)({},w),{},{open:!0,loading:!0})),f.authorize(e).then((function(t){I(Object(u.a)(Object(u.a)({},w),{},{open:!0,loading:!1,success:!0,message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})),localStorage.setItem("jwt",t.token),i(!0),g(e.email),setTimeout((function(){U.push("./main"),I(Object(u.a)(Object(u.a)({},w),{},{open:!1,success:!1,message:""}))}),1800)})).catch((function(e){console.log(e),I(Object(u.a)(Object(u.a)({},w),{},{open:!0,success:!1,loading:!1,failed:!0,message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"}))}))},infoPopupState:w,onPopupClose:ie})}),Object(n.jsx)(p.b,{path:"/sign-up",children:Object(n.jsx)(E,{userEmail:_,onRegister:function(e){I(Object(u.a)(Object(u.a)({},w),{},{open:!0,loading:!0})),f.register(e).then((function(){I(Object(u.a)(Object(u.a)({},w),{},{open:!0,loading:!1,success:!0,message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})),setTimeout((function(){I(Object(u.a)(Object(u.a)({},w),{},{open:!1,success:!1,message:""}))}),1800)})).catch((function(e){I(Object(u.a)(Object(u.a)({},w),{},{open:!0,success:!1,loading:!1,failed:!0,message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"})),console.log(e)}))},infoPopupState:w,onPopupClose:ie})}),Object(n.jsx)(O,{path:"/",component:J,loggedIn:a,userEmail:_,mainProps:oe,popupProps:ce})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))};a(35);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(B,{})})}),document.getElementById("root")),G()}},[[36,1,2]]]);
//# sourceMappingURL=main.884bd490.chunk.js.map