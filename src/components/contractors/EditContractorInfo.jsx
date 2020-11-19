import React from 'react'

class EditContractorInfo extends React.Component {
    render() {
        return (
            <div className="edit-contractor-info">
                <h2>Новый подрядчик</h2>
                <form action="/" className="edit-contractor-info__form">
                    <label className="labeled-field">
                        <span className="edit-contractor-info__name-label">Наименование</span>
                        <input type="text"/>
                    </label>
                    <label className="labeled-field">
                        <span>Технологический стек</span>
                        <textarea className="edit-contractor-info__technology-stack"></textarea>
                    </label>
                    <div className="form-group-row">
                    <label className="labeled-field">
                        <span>Телефон</span>
                        <input type="tel"/>
                    </label>
                    <label className="labeled-field">
                        <span>E-mail</span>
                        <input type="email"/>
                    </label>
                    </div>
                    <div className="form-group-row">
                    <label className="labeled-field">
                        <span>Telegram</span>
                        <input type="text"/>
                    </label>
                    <label className="labeled-field">
                        <span>Выполнено закупок</span>
                        <input type="number"/>
                    </label>
                    </div>
                    <div className="form-group-row">
                    <label className="labeled-field">
                        <span>ИНН</span>
                        <input type="number"/>
                    </label>
                    <label className="labeled-field">
                        <span>Статус</span>
                        <select>
                            <option value="1">Одобрен</option>
                            <option value="2">Одобрен с ограничениями</option>
                            <option value="3">Не одобрен</option>
                        </select>
                    </label>
                    </div>
                    <button type="submit" className="btn">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EditContractorInfo