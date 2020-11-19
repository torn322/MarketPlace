import React from 'react'
import Modal from '../Modal'
import EditPurchase from '../tender/EditPurchase'
import ContractorCard from './ContractorCard'
import EditContractorInfo from './EditContractorInfo'

class ContractorCardExtended extends React.Component {
    state = {
        isOrderModalVisible: true
    }

    modalHandler = () => {
        this.setState({isOrderModalVisible: !this.state.isOrderModalVisible})
    }

    extention = (
        <div className="contractor-card__btns">
            <button className="btn btn_blue">Написать</button>
            <button className="btn" onClick={this.modalHandler}>Редактировать</button>
        </div>
    )

    render() {
        return (
            <div className="">
                <ContractorCard extention={ this.extention }/>
                {this.state.isOrderModalVisible ? 
                    <Modal handler={this.modalHandler}>
                        {/* <EditContractorInfo /> */}
                        <EditPurchase />
                    </Modal> : null} 
            </div>
        )
    }
}

export default ContractorCardExtended