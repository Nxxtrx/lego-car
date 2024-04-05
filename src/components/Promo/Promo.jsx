import './Promo.scss'
import diagnosticCarImage from '../../utils/images/promo-diagnostic-car.png'
import onlineShowCarImage from '../../utils/images/promo-online-show-car.png'
import backgroundPlayImage from '../../utils/images/promo-play-img.svg'
import phoneImage from './../../utils/images/promo-phone-img.png'
import backgroundLenseImage from './../../utils/images/promo-lense.svg'
import markCarImage from '../../utils/images/promo-mark-car.png'

const Promo = () => {
  return (
    <section className="promo container">
      <h2 className="promo__title">Теперь услуги дилерского центра Вы можете можете получить онлайн!</h2>
      <div className="promo__container">
        <div className="promo__card card">
          <h3 className="card__title">Диагностика автомобиля<br/> перед покупкой</h3>
          <p className="card__description">Расскажем обо всех скрытых дефектах<br/> автомобиля с пробегом</p>
          <button className="card__btn">Записаться</button>
          <img className='card__image' src={diagnosticCarImage} alt="" />
        </div>
        <div className="promo__card card">
          <h3 className="card__title">Онлайн показ автомобиля по<br/> видеосвязи</h3>
          <p className="card__description">Проведем онлайн-показ интересующего<br/> автомобиля в удобное для Вас время</p>
          <button className="card__btn">Оставить заявку</button>
          <img className='card__image' src={onlineShowCarImage} alt="" />
          <img className ="card__background-image" src={backgroundPlayImage} alt="" />
        </div>
        <div className="promo__card card">
          <h3 className="card__title">Онлайн бронирование</h3>
          <p className="card__description">Забронируйте понравившийся<br/> автомобиль без визита в дилерский центр</p>
          <button className="card__btn">Забронировать</button>
          <img className='card__image' src={phoneImage} alt="" />
        </div>
        <div className="promo__card card">
          <h3 className="card__title">Онлайн оценка автомобиля с<br/> пробегом</h3>
          <p className="card__description">Узнайте предварительную стоимость<br/> автомобиля за 1 мин, указав его параметры</p>
          <button className="card__btn">Оценить</button>
          <img className='card__image' src={markCarImage} alt="" />
          <img className ="card__background-image" src={backgroundLenseImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Promo