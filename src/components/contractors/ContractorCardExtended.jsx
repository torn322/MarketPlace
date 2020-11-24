import React from 'react'
import Modal from '../Modal'
import ContractorCard from './ContractorCard'
import EditContractorInfo from './EditContractorInfo'

class ContractorCardExtended extends React.Component {
    state = {
        isOrderModalVisible: false
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
        const {info} = this.props
        return (
            <div className="">
                <ContractorCard extention={ this.extention } info={info}/>
                {this.state.isOrderModalVisible ? 
                    <Modal handler={this.modalHandler}>
                        <EditContractorInfo info={info} closeModal={this.modalHandler}/>
                    </Modal> : null} 
            </div>
        )
    }
}

export default ContractorCardExtended