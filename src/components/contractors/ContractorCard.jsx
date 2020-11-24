
import React from 'react'

class ContractorCard extends React.Component {
    render() {
        const { extention } = this.props || null
        const info = this.props.info
        if (info)
            return (
                <div className="contractor-card">
                    <i className="contractor-card__indicator contractor-card__indicator_green"></i>
                    <div className="contractor-card__header">
                    <h3 className="contractor-card__title">{info.fullName}</h3>
                        <span className="contractor-card__contractor-status">Одобрен ???</span>
                    </div>
                    <p className="contractor-card__technology-stack">
                        {info.stack} 
                    </p>
                    { extention ? null : <hr className="contractor-card__underline"/> }
                    <ul className="contractor-card__info-list">
                        <li className="contractor-card__info-item">
                            <div className="contractor-card__info-label">Телефон</div>
                            <div className="contractor-card__info-value">{info.phoneNumber}</div>
                        </li>
                        <li className="contractor-card__info-item">
                            <div className="contractor-card__info-label">E-mail</div>
                            <div className="contractor-card__info-value">{info.email}</div>
                        </li>
                        <li className="contractor-card__info-item">
                            <div className="contractor-card__info-label">Telegram</div>
                            <div className="contractor-card__info-value">{info.telegram}</div>
                        </li>
                        <li className="contractor-card__info-item">
                            <div className="contractor-card__info-label">Выполнено закупок</div>
                            <div className="contractor-card__info-value">{'???????'}</div>
                        </li>
                        <li className="contractor-card__info-item">
                            <div className="contractor-card__info-label">ИНН</div>
                            <div className="contractor-card__info-value">{info.inn}</div>
                        </li>
                    </ul>
                    <div className="contractor-card__footer">
                        { extention }
                        <div className="contractor-card__city">Томск ???</div>
                    </div>
                </div>
            )
        else
            return null

    }
}

export default ContractorCard