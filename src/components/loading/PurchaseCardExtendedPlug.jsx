import React from 'react'

class PurchaseCardExtendedPlug extends React.Component {
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
                        <span className="purchase-card-plug__description-item"></span>
                        <span className="purchase-card-plug__description-item"></span>
                    </div>
                    <span className="purchase-card-plug__subtitle"></span>
                    <div className="purchase-card-plug__description">
                        <span className="purchase-card-plug__description-item"></span>
                        <span className="purchase-card-plug__description-item"></span>
                    </div>
                    <span className="purchase-card-plug__subtitle"></span>
                    <div className="purchase-card-plug__team">
                        <span className="purchase-card-plug__team-item"></span>
                        <span className="purchase-card-plug__team-item"></span>
                        <span className="purchase-card-plug__team-item"></span>
                    </div>
                    <span className="purchase-card-plug__subtitle"></span>
                    <div className="purchase-card-plug__description">
                        <span className="purchase-card-plug__description-item purchase-card-plug__description-item_short"></span>
                    </div>
                    <div className="purchase-card-plug__footer">
                        <div className="purchase-card-plug__btns">
                            <span className="plug-btn"></span>
                        </div>
                    <span className="purchase-card-plug__finish-date"></span>
                    </div>
                </div>
        )
    }
}

export default PurchaseCardExtendedPlug