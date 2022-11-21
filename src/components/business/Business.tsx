import React from 'react';
import search from "../../assets/img/ic_search.svg";
import percent from "../../assets/img/ic_percent.svg";
import document from "../../assets/img/ic_document.svg";
import mail from "../../assets/img/ic_mail.svg";
import cash from "../../assets/img/ic_cash.svg";
import file from "../../assets/img/ic_file.svg";
import {useForm} from "react-hook-form";
import {style} from "../../formErrorStyle";
import {selectStyles} from "../../SelectStyles";
import Select from "react-select";

const Business = () => {
    const [fileTitle, setFileTitle] = React.useState('Прикрепить файл');
    const [range, setRange] = React.useState(0);
    const [systemType, setSystemType] = React.useState('');

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors, isValid}
    } = useForm<{
        system_type: string,
        name: string,
        email: string
        range: string
        file: string
    }>({mode: 'all'})

    const systemTypeOptions: any = [
        {value: '1', label: 'Sed ut perspiciatis'},
        {value: '2', label: 'Nemo enim ipsam'},
        {value: '3', label: 'Et harum quidem'},
        {value: '4', label: 'Temporibus autem'},
        {value: '5', label: 'Itaque earum rerum'},
        {value: '6', label: 'Sed ut perspiciatis'},
        {value: '7', label: 'Nemo enim ipsam'},
        {value: '8', label: 'Et harum quidem'},
        {value: '9', label: 'Temporibus autem'},
        {value: '10', label: 'Itaque earum rerum'},
        {value: '11', label: 'Sed ut perspiciatis'},
        {value: '12', label: 'Nemo enim ipsam'},
        {value: '13', label: 'Et harum quidem'},
        {value: '14', label: 'Temporibus autem'},
        {value: '15', label: 'Itaque earum rerum'},
    ]

    const onSubmit = handleSubmit((data: any) => {
        console.log(data)
        reset();
        setValue('system_type', '')
        setSystemType('')
        setValue('file', '')
        setFileTitle('Прикрепить файл')
        setValue('range', '0')
        setRange(0)
    })
    const onFileChange = (event: any) => {
        if (event.target.files[0]) {
            setFileTitle(event.target.files[0].name)
        }
    }
    const onRangeChange = (event: any) => {
        setRange(event.target.value)
    }
    const changeSystemType = (val: any) => {
        setValue('system_type', val.value)
        setSystemType(val.value)
    }

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
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form__row">
                                <div className="form__input">
                                    {
                                        errors?.system_type
                                        &&
                                        (<div className="form_error">
                                            {errors?.system_type && <p> {errors?.system_type?.message || ''}</p>}
                                        </div>)
                                    }
                                    <Select
                                        {...register('system_type', {
                                            required: 'Обязательное поле',
                                        })}
                                        isSearchable={false}
                                        options={systemTypeOptions}
                                        placeholder='Выберите тип системы'
                                        className="select"
                                        classNamePrefix="select"
                                        styles={selectStyles}
                                        value={systemType ? systemTypeOptions.find((e: any) => systemType === e.value) : null}
                                        onChange={changeSystemType}
                                    />
                                </div>
                                <div className="form__input">
                                    {
                                        errors?.name
                                        &&
                                        (<div className="form_error">
                                            {errors?.name && <p> {errors?.name?.message || ''}</p>}
                                        </div>)
                                    }
                                    <input
                                        {...register('name', {
                                            required: 'Обязательное поле',
                                        })}
                                        type="text"
                                        style={style(errors?.name)}
                                        placeholder="Ваше имя"
                                    />
                                </div>
                                <div className="form__input">
                                    {
                                        errors?.email
                                        &&
                                        (<div className="form_error">
                                            {errors?.email && <p> {errors?.email?.message || ''}</p>}
                                        </div>)
                                    }
                                    <input
                                        {...register('email', {
                                            required: 'Обязательное поле',
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Неверный формат email'
                                            }
                                        })}
                                        type="text"
                                        style={style(errors?.email)}
                                        placeholder="Ваш email"/>
                                </div>
                            </div>
                            <div className="form__row form__row_secondary">
                                <div className="form__input form__range">
                                    <div className="form__range-container">
                                        <p className="form__range-title">
                                            Sed ut perspiciatis, unde omnis iste natus
                                        </p>
                                        <p className="form__range-value">
                                            {range} %
                                        </p>
                                    </div>
                                    <input
                                        {...register('range', {
                                            required: 'Обязательное поле'
                                        })}
                                        onChange={onRangeChange}
                                        type="range"
                                        value={range}
                                        min="0" max="100"/>
                                </div>
                                <div className="form__input form__file">
                                    <img src={file} alt="Прикрепить файл"/>
                                    <div className="form__file-title">{fileTitle}</div>
                                    <input
                                        {...register('file', {
                                            required: 'Обязательное поле'
                                        })}
                                        type="file"
                                        placeholder=""
                                        onChange={onFileChange}/>
                                </div>
                            </div>

                            <button type="submit" className="button"
                                    disabled={!isValid}>Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Business;

