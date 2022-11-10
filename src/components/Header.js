import logo from '../images/logo_transparent-cut.png';
import RequestForm from './RequestForm';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип"/>
      <div className="header__wrap">
        <h1 className="header__title">Поиск изображений на основе Unsplash API</h1>
        <RequestForm/>
      </div>
    </header>
  );
}