import React from 'react';

import Logo from "../assets/img/Logo.svg"
import vk from  "../assets/img/VK_Compact_Logo 1.png"
import telegram from  "../assets/img/telegram.png"
import { Link } from 'react-router-dom';

function Footer(){
    return(
<footer className="footer">
    <div className="container">
       <div className="wrapper">
        <div className="footer__label">
            <div className="logo">
                <a href="/"><img className="logo__img" src={Logo} alt="logo"></img></a>
                <a href="/" className="logo__text"><span>Ranobe</span>Room</a>
            </div>
            <h3 className="logo-title">Удобный сайт для прочтения ранобе <br></br>
                на русском языке. </h3>
            <div className="text">© 2023 RanobeRoom.ru</div>
        </div>

        <ul className="menu-footer">
                <li><Link to={"/"}className="menu-footer__link">Главная</Link></li>
                <li><Link to={"/Catalog"}className="menu-footer__link">Каталог</Link></li>
                <li><Link to={"/Subscription"} className="menu-footer__link">Подписка</Link></li>
        </ul>

        <div className="сontacts">
            <h3 className="contacts__title">Контакты</h3>
            <div className="contacts__text">Круглосуточная техническая поддержка<br></br>support@RanobeRoom.ru</div>
            <div className="contacts__social">
                <a href="#"><img src={vk} alt="vk" className="vk"></img></a>
                <a href="#"><img src={telegram} alt="telegram" className="telegram"></img></a>
            </div>
            
        </div>

       </div>

    </div>
</footer>


    )
}

export default Footer;