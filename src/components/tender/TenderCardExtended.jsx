import React from 'react'

class TenderCardExtended extends React.Component {
    render() {
        return (
            <div className="tender-card tender-card_extended">
                <i className="tender-card__indicator"></i>
                <div className="tender-card__header">
                    <h3 className="tender-card__title">№9843578309236487</h3>
                    <span className="tender-card__price">230 700<small>,00</small> Р</span>
                </div>
                <p className="tender-card__description">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Quisque a auctor turpis. Quisque ac cursus justo. Suspendisse 
                    suscipit eros at finibus pellentesque. Donec at bibendum leo. Vestibulum elementum 
                    nulla eu elit dictum tristique. Nunc</p>
                <h4 className="tender-card__subtitle">Требования</h4>
                <p className="tender-card__description">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Quisque a auctor turpis. Quisque ac cursus justo. Suspendisse 
                    suscipit eros at finibus pellentesque. Donec at bibendum leo. Vestibulum elementum 
                    nulla eu elit dictum tristique. Nunc</p>
                <h4 className="tender-card__subtitle">Состав команды</h4>
                <div className="tender-card__team">
                    <span className="tender-card__team-item">Backend<span className="tender-card__team-amount"><small>x</small>2</span></span>
                    <span className="tender-card__team-item">Backend<span className="tender-card__team-amount"><small>x</small>2</span></span>
                    <span className="tender-card__team-item">Backend<span className="tender-card__team-amount"><small>x</small>2</span></span>
                </div>
                <h4 className="tender-card__subtitle">Технологический стек</h4>
                <p className="tender-card__description">React.js, Sass, Java, MySql, React.js, Sass, Java, MySql, </p>
                <div className="tender-card__footer">
                    <button className="btn">Подать заявку</button>
                    <span className="tender-card__finish-date">Подача заявок до: <span className="pink">27.10.2020 </span></span>
                </div>
            </div>
        )
    }
}

export default TenderCardExtended