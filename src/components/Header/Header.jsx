import headerLogo from '../../utils/images/header-logo.svg'
import locationPinImg from '../../utils/images/map-pin.svg'
import locationRouteImg from '../../utils/images/map-location.svg'
import locationClockImg from '../../utils/images/map-clock.svg'
import'./Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__delimiter">
      <div className="header__container container">
        <img className='header__logo' src={headerLogo} alt="Логотип Changan Auto"/>
        <nav className='header__menu-container'>
          <ul className='header__menu'>
            <li className='header__menu-item'>
              <a className='header__menu-link' href="#">Автомобили в наличии</a>
            </li>
            <li className='header__menu-item'>
              <a className='header__menu-link' href="#">Спецпредложения</a>
            </li>
            <li className='header__menu-item'>
              <a className='header__menu-link' href="#">Продать авто</a>
            </li>
            <li className='header__menu-item'>
              <a className='header__menu-link' href="#">Сервис</a>
            </li>
            <li className='header__menu-item'>
              <a className='header__menu-link' href="#">Контакты</a>
            </li>
          </ul>
        </nav>
        <button className='header__call-btn'>Заказать звонок</button>
        </div>
      </div>
      <div className='location container'>
        <div className='location__store'>
          <img src={locationPinImg} alt="местонахождение магазина" />
          <a href='#' className='location__change-store'>Олимпийский просп., 5, стр. 1, Москва</a>
        </div>
        <div className='location__store location__store_type_driveway'>
          <img src={locationRouteImg} alt="иконка маршрута" />
          <a href='#' className='location__change-store'>Проложить маршрут</a>
        </div>
        <div className='location__store'>
          <img src={locationClockImg} alt="иконка маршрута" />
          <a href='#' className='location__change-store'>9:00 - 21:00 (ежедневно)</a>
        </div>
      </div>
    </header>
  )
}

export default Header