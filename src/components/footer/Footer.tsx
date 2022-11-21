import React from 'react';
import qiwi from "../../assets/img/ic_qiwi.svg";
import yandex from "../../assets/img/ic_yandex_money.svg";
import web from "../../assets/img/ic_web_money.svg";
import mail from "../../assets/img/ic_mail_small.svg";
import vk from "../../assets/img/ic_vk.svg";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__item">
                        <div className="footer__sub-item">
                            <p> &#169; 2018 «LoremIpsum.net» Все права защищены.</p>
                        </div>
                    </div>

                    <div className="footer__item">
                        <div className="footer__sub-item">
                            <img src={qiwi} alt="Qiwi wallet"/>
                            <p>Qiwi wallet</p>
                        </div>
                        <div className="footer__sub-item">
                            <img src={yandex} alt="Yandex Money"/>
                            <p>Yandex Money</p>
                        </div>
                        <div className="footer__sub-item">
                            <img src={web} alt="Web Money"/>
                            <p>Web Money</p>
                        </div>
                    </div>

                    <div className="footer__item">
                        <div className="footer__sub-item">
                            <img src={mail} alt="e-mail"/>
                            <a href="mailto:info@ipsum228.com">info@ipsum228.com</a>
                        </div>
                        <div className="footer__sub-item">
                            <img src={vk} alt="Вконтакте"/>
                            <a href="mailto:info@ipsum228.com">info@ipsum228.com</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
};

export default Footer;

