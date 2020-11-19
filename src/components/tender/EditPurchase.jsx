import React from 'react'
import FileInput from '../common/form/FileInput'
import Taginput from '../common/form/TagInput'

class EditPurchase extends React.Component {
    state = {
        tagList: []
    }

    addTags = (tagList) => {
        this.setState({tagList: tagList})
    }

    render() {
        return (
            <div className="edit-purchase">
                <h2>Новая закупка</h2>
                <form action="/" className="edit-purchase__form">
                    <label className="labeled-field">
                        <span className="edit-purchase__name-label">Наименование</span>
                        <input type="text"/>
                    </label>
                    <label className="labeled-field">
                        <span>Описание</span>
                        <textarea className=""></textarea>
                    </label>
                    <label className="labeled-field">
                        <span>Требования</span>
                        <textarea className=""></textarea>
                    </label>
                    <label className="labeled-field">
                        <span>Состав команды</span>
                        <Taginput onChange={this.addTags}/>
                    </label>
                    <label className="labeled-field">
                        <span>Технологический стек</span>
                        <textarea className=""></textarea>
                    </label>
                    <div className="form-group-row edit-purchase__form-group-row">
                    <label className="labeled-field">
                        <span>Сумма</span>
                        <input type="tel"/>
                    </label>
                    <label className="labeled-field">
                        <span>Прием заявок до</span>
                        <input type="date"/>
                    </label>
                    </div>
                    <FileInput />
                    <p>Здесь надо добавить загрузку документов</p>
                    <button className="btn">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EditPurchase