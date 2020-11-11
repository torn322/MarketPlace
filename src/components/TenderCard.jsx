import React from 'react'

class TenderCard extends React.Component {
    render() {
        return (
            <div className="tender-card">
                <i className="tender-card__indicator"></i>
                <div className="tender-card__header">
                    <h3 className="tender-card__title">№9843578309236487</h3>
                    <span className="tender-card__price">230 700<small>,00</small> Р</span>
                </div>
                <p className="tender-card__description">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Quisque a auctor turpis. Quisque ac cursus justo. Suspendisse 
                    suscipit eros at finibus pellentesque. Donec at bibendum leo. Vestibulum elementum 
                    nulla eu elit dictum tristique. Nunc</p>
                <div className="tender-card__footer">
                    <span className="tender-card__finish-date">Подача заявок до: <span className="pink">27.10.2020 </span></span>
                </div>
            </div>
        )
    }
}

export default TenderCard