import React from 'react';

const Business = () => {

    return (
        <>
            <section className="business">
                <div className="container">
                    <div className="business__container">
                        <h1><span className="title_decoration">Lorem ipsum</span> dolor sit amet
                            consectetur <span className="title_decoration">adipiscing</span></h1>
                        <div className="business__body">
                            <div className="business__title">At vero eos et accusamus et iusto odio dignissimos ducimus!</div>
                            <nav className="business__navigation">
                                <ul className="business__list">
                                    <li className="business__item">
                                        Totam rem aperiam eaque ipsa
                                    </li>
                                    <li className="business__item">
                                        Sit voluptatem accusantium doloremque laudantium
                                    </li>
                                    <li className="business__item">
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
        </>
    )
};

export default Business;

