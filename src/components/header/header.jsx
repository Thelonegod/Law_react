import mainLogo from './../../img/logsPic/law_logs/initial_logs/main_logo.svg'
import './header.css'
function Header(){
    
    return(
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header_logo"><img src={mainLogo} alt="Logo"/></div>
                    <div className="header__nav">
                        <ul>
                            <li><a href="#!">Сопровождение бизнеса</a></li>
                            <li><a href="#!">Дист. обучение</a></li>
                            <li><a href="#!">Лицензирование</a></li>
                            <li><a href="#!">О нас</a></li>
                            <li><a href="#!">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;