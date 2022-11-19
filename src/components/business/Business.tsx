import React from 'react';
import search from "../../assets/img/ic_search.svg";
import percent from "../../assets/img/ic_percent.svg";
import document from "../../assets/img/ic_document.svg";
import mail from "../../assets/img/ic_mail.svg";
import cash from "../../assets/img/ic_cash.svg";

const Business = () => {

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="main__container">
                        <h1><span className="title_decoration">Lorem ipsum</span> dolor sit amet
                            consectetur <span className="title_decoration">adipiscing</span></h1>
                        <div className="main__body">
                            <div className="main__title">At vero eos et accusamus et iusto odio dignissimos ducimus!
                            </div>
                            <nav className="main__navigation">
                                <ul className="main__list">
                                    <li className="main__item">
                                        Totam rem aperiam eaque ipsa
                                    </li>
                                    <li className="main__item">
                                        Sit voluptatem accusantium doloremque laudantium
                                    </li>
                                    <li className="main__item">
                                        Sed ut perspiciatis, unde omnis iste natus error
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="button__container">
                            <div className="button">заказать</div>
                            <div className="button button_secondary">подробнее</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ordering">
                <div className="container">
                    <div className="ordering__container">
                        <h2>
                            Оформление <span className="title_decoration">Заказа</span>
                        </h2>
                        <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                        <div className="ordering__list">
                            <div className="ordering__item">
                                <img src={search} alt="Lorem"/>
                                <div className="ordering__item-title">
                                    Lorem ipsum dolor
                                    sit amet
                                </div>
                            </div>
                            <div className="ordering__item">
                                <img src={percent} alt="Lorem"/>
                                <div className="ordering__item-title">
                                    Сonsecteturadipiscing elit
                                </div>
                            </div>
                            <div className="ordering__item">
                                <img src={document} alt="Lorem"/>
                                <div className="ordering__item-title">
                                    Sed do eiusmod tempor
                                </div>
                            </div>
                            <div className="ordering__item">
                                <img src={mail} alt="Lorem"/>
                                <div className="ordering__item-title">
                                    Esse cillum dolore
                                    eu fugiat
                                </div>
                            </div>
                            <div className="ordering__item">
                                <img src={cash} alt="Lorem"/>
                                <div className="ordering__item-title">
                                    Excepteur sint occaecat cupidatat non proident
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Business;

