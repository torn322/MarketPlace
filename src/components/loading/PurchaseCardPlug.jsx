import React from 'react'

class PurchaseCardPlug extends React.Component {
    render() {
        return (
            <div className="purchase-card-plug">
                <div className="purchase-card-plug__gradient"></div>
                <i className="purchase-card-plug__indicator indicator indicator_grey"></i>
                <div className="purchase-card-plug__header">
                    <span className="purchase-card-plug__title"></span>
                    <span className="purchase-card-plug__price"></span>
                </div>
                <div className="purchase-card-plug__description">
                    <span className="purchase-card-plug__description-item"></span>
                    {/* <span className="purchase-card-plug__description-item"></span> */}
                    {/* <span className="purchase-card-plug__description-item"></span> */}
                    <span className="purchase-card-plug__description-item"></span>
                </div>
                <div className="purchase-card-plug__footer">
                    <span className="purchase-card-plug__region"></span>
                    <span className="purchase-card-plug__finish-date"></span>
                </div>
            </div>
        )
    }
}

export default PurchaseCardPlug

