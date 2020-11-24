import React from 'react'
import Tag from '../common/Tag'
import PurchaseCardExtendedPlug from '../loading/PurchaseCardExtendedPlug'
import Modal from '../Modal'
import Order from '../tender/Order'
import EditPurchase from './EditPurchase'

class TenderCardExtended extends React.Component {

    state = {
        isModalVisible: false,
        isEditModalVisible: false
    }

    modalHandler = () => {
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

    editModalHandler = () => {
        this.setState({isEditModalVisible: !this.state.isEditModalVisible})

    }

    componentWillUnmount = () => {
        this.props.clearInfo()
    }

    render() {
        const info = this.props.info
        console.log(info)
        if (info)
            return (
                <div className="tender-card tender-card_extended">
                    <i className="tender-card__indicator"></i>
                    <div className="tender-card__header">
                        <h3 className="tender-card__title">{info.title}</h3>
                        <span className="tender-card__price">{info.price}<small>,00</small> Р</span>
                    </div>
                    <p className="tender-card__description">{info.description}</p>
                    <h4 className="tender-card__subtitle">Требования</h4>
                    <p className="tender-card__description">{info.requirements}</p>
                    <h4 className="tender-card__subtitle">Состав команды</h4>
                    <div className="tender-card__team">
                        {info.teamLists.map((item, i) => <Tag key={i} name={item.role} amount={item.count} canBeDeleted={false}/>)}
                    </div>
                    <h4 className="tender-card__subtitle">Технологический стек</h4>
                    <p className="tender-card__description">{info.techStack}</p>
                    <div className="tender-card__footer">
                        <div className="tender-card__btns">
                            <button className="btn" onClick={this.modalHandler}>Подать заявку</button>
                            <button className="btn btn_blue tender-card__edit" onClick={this.editModalHandler}>Редактировать</button>
                        </div>
                    <span className="tender-card__finish-date">Подача заявок до: <span className="pink">{info.passDate}</span></span>
                    </div>
                    {this.state.isModalVisible ? 
                        <Modal handler={this.modalHandler}>
                            <Order />
                        </Modal> : null}

                    {this.state.isEditModalVisible ? 
                    <Modal handler={this.editModalHandler}>
                        <EditPurchase info={info} closeModal={this.editModalHandler}/>
                    </Modal> : null}
                </div>
            )
            else
                return <PurchaseCardExtendedPlug />
    }
}

export default TenderCardExtended