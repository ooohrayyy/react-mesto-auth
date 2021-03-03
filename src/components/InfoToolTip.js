import loaderImage from '../resources/images/svgs/info-loader.svg';
import errorImage from '../resources/images/svgs/info-error.svg';

function InfoToolTip (props) {
  // const registerSuccessMsg = 'Вы успешно зарегистрировались!';
  // const errorMsg = 'Что-то пошло не так! Попробуйте ещё раз';

  return (
    <div className={`info ${props.infoModifier}`}>
      <img className="info__img" src={props.state.loading ? loaderImage : errorImage} alt="Иллюстрация сообщения" />
      <h3 className="info__text">{props.state.loading ? 'Загрузка...' : props.state.message}</h3>
    </div>
  );
}

export default InfoToolTip;