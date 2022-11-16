import React from 'react';
import classNames from "classnames";
import logo from "../../assets/img/logo.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [menu, setMenu] = React.useState(false);
    const openMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="header__container">
                        <div className="header__logo">
                            <img className="header__logo-image" src={logo} alt="Логотип"/>
                        </div>
                        <div className={classNames('menu', menu ? ' menu__open' : 'menu__close')}>
                            <nav className="navigation">
                                <ul className="navigation__container">
                                    <li className="navigation__item" onClick={openMenu}>
                                        <NavLink to="/business">
                                            Бизнес
                                        </NavLink>
                                    </li>
                                    <li className="navigation__item" onClick={openMenu}>
                                        <NavLink to="/">
                                            Цены
                                        </NavLink>
                                    </li>
                                    <li className="navigation__item" onClick={openMenu}>
                                        <NavLink to="/">
                                            О нас
                                        </NavLink>
                                    </li>
                                    <li className="navigation__item" onClick={openMenu}>
                                        <NavLink to="/">
                                            Оформить заказ
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={classNames('burger', menu ? ' burger_active' : '')} onClick={openMenu}>
                <span className="burger__container">
                </span>
                </div>
            </header>
        </>
    )
};

export default Header;

