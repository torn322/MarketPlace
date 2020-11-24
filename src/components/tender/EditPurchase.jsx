import React from 'react'
import FileInput from '../common/form/FileInput'
import Taginput from '../common/form/TagInput'

import PurchaseApi from '../../api/PurchaseApi'

class EditPurchase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.info}
        // this.state.teamLists = []
        this.state.files = []
        this.api = new PurchaseApi()
    }


    addTags = (teamLists) => {
        this.setState({teamLists: teamLists})
    }

    addFiles = files => {
        this.setState({files})
    }

    changeHandler = (e) => {
        const value = e.target.value 
        const name = e.target.name

        this.setState({...this.state, [name]: value})
    }

    submitHandler = (e) => {
        e.preventDefault()

        const params = {
            id: this.state.id,
            body: {
                userId: '0fe52e56-6dc1-473b-b719-bbdf099cfa55',
                title: this.state.title,
                description: this.state.description,
                requirements: this.state.requirements,
                teamLists: this.state.teamLists,
                techStack: this.state.techStack,
                price: this.state.price,
                passDate: this.state.passDate,
                considerDate: this.state.considerDate,
                region: this.state.region,
                type: 'qwer',
                tags: [
                    'hgj'
                ]
            }
        }

        if (this.props.type === 'new') {
            this.api.create(params)
        } else {
            this.api.update(params)
        }

        this.props.closeModal()
    }

    deleteHandler = (e) => {
        e.preventDefault()
        this.api.delete(this.state.id)
        window.location = '/'
    }

    render() {
        const isRequired = (this.props.type === 'new')
        return (
            <div className="edit-purchase">
                {this.props.type === 'new' ? <h2>Новая закупка</h2> : <h2>Редактировать закупку</h2>}
                <form action="/" className="edit-purchase__form">
                    <label className="labeled-field">
                        <span className="edit-purchase__name-label">Наименование</span>
                        <input type="text" name="title" required={isRequired} value={this.state.title} onChange={this.changeHandler}/>
                    </label>
                    <label className="labeled-field">
                        <span>Описание</span>
                        <textarea name="description" required={isRequired} value={this.state.description} onChange={this.changeHandler}></textarea>
                    </label>
                    <label className="labeled-field">
                        <span>Требования</span>
                        <textarea name="requirements" required={isRequired} value={this.state.requirements} onChange={this.changeHandler}></textarea>
                    </label>
                    <label className="labeled-field">
                        <span>Состав команды</span>
                        <Taginput onChange={this.addTags} tagList={this.state.teamLists}/>
                    </label>
                    <label className="labeled-field">
                        <span>Технологический стек</span>
                        <textarea name="techStack" required={isRequired} value={this.state.techStack} onChange={this.changeHandler}></textarea>
                    </label>
                    <div className="form-group-row edit-purchase__form-group-row">
                    <label className="labeled-field">
                        <span>Регион</span>
                        <input type="text" name="region" required={isRequired} value={this.state.region} onChange={this.changeHandler}/>
                    </label>
                    <label className="labeled-field">
                        <span>Сумма</span>
                        <input type="tel" name="price" required={isRequired} value={this.state.price} onChange={this.changeHandler}/>
                    </label>
                    </div>
                    <div className="form-group-row edit-purchase__form-group-row">
                    <label className="labeled-field">
                        <span>Прием заявок до</span>
                        <input type="date" name="passDate" required={isRequired} value={this.state.passDate} onChange={this.changeHandler}/>
                    </label>
                    <label className="labeled-field">
                        <span>Рассмотрение заявок до</span>
                        <input type="date" name="considerDate" required={isRequired} value={this.state.considerDate} onChange={this.changeHandler}/>
                    </label>
                    </div>
                    <label className="labeled-field">
                        <span>Файлы</span>
                        <FileInput onChange={this.addFiles}/>
                    </label>
                    <hr className="form-underline"/>
                    <div className="form-group-row edit-purchase__btns">
                        <button className="btn" onClick={this.submitHandler}>Сохранить</button>
                        {this.props.type !== 'new' ? <button className="btn btn_blue" onClick={this.deleteHandler}>Удалить</button> : null} 
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPurchase