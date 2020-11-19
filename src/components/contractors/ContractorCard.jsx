import React from 'react'

class ContractorCard extends React.Component {
    render() {
        const { extention } = this.props || null
        return (
            <div className="contractor-card">
                <i className="contractor-card__indicator contractor-card__indicator_green"></i>
                <div className="contractor-card__header">
                    <h3 className="contractor-card__title">Рос-гос-сельхоз-строй-банк</h3>
                    <span className="contractor-card__contractor-status">Одобрен</span>
                </div>
                <p className="contractor-card__technology-stack">
                    React.js, Sass, Java, MySql, React.js, Sass, Java, MySql 
                </p>
                { extention ? null : <hr className="contractor-card__underline"/> }
                <ul className="contractor-card__info-list">
                    <li className="contractor-card__info-item">
                        <div className="contractor-card__info-label">Телефон</div>
                        <div className="contractor-card__info-value">+7 900 989 45 15</div>
                    </li>
                    <li className="contractor-card__info-item">
                        <div className="contractor-card__info-label">E-mail</div>
                        <div className="contractor-card__info-value">bankstroy@gmail.com</div>
                    </li>
                    <li className="contractor-card__info-item">
                        <div className="contractor-card__info-label">Telegram</div>
                        <div className="contractor-card__info-value">@bankstroy</div>
                    </li>
                    <li className="contractor-card__info-item">
                        <div className="contractor-card__info-label">Выполнено закупок</div>
                        <div className="contractor-card__info-value">10</div>
                    </li>
                </ul>
                <div className="contractor-card__footer">
                    { extention }
                    <div className="contractor-card__city">Томск</div>
                </div>
            </div>
        )
    }
}

export default ContractorCard