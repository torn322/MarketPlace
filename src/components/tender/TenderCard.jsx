import React from 'react'

class TenderCard extends React.Component {
    render() {
        const {info} = this.props
        return (
            <div className="tender-card">
                <i className="tender-card__indicator"></i>
                <div className="tender-card__header">
                    <h3 className="tender-card__title">{info.title}</h3>
                    <span className="tender-card__price">{info.price}<small>,00</small> Р</span>
                </div>
                <p className="tender-card__description">{info.description}</p>
                <div className="tender-card__footer">
                <span className="tender-card__region">{info.region}</span>
                <span className="tender-card__finish-date">Подача заявок до: <span className="pink">{info.considerDate}</span></span>
                </div>
            </div>
        )
    }
}

export default TenderCard