import loaderImage from '../../resources/images/svgs/info-loader.svg';
import successImage from '../../resources/images/svgs/info-success.svg';
import errorImage from '../../resources/images/svgs/info-error.svg';

function InfoToolTip (props) {
  let infoImage; // * Переменная иллюстрации

  if (props.state.loading) {
    infoImage = loaderImage;
  } else if (props.state.success) {
    infoImage = successImage;
  } else if (props.state.failed) {
    infoImage = errorImage;
  }

  // * Возвращаемое значение

  return (
    <div className={`info ${props.infoModifier}`}>
      <img className="info__img" src={infoImage} alt="Иллюстрация сообщения" />
      <h3 className="info__text">{props.state.loading ? 'Загрузка...' : props.state.message}</h3>
    </div>
  );
}

export default InfoToolTip;