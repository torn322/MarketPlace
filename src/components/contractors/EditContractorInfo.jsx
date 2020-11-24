import React from 'react'
import ContractorApi from '../../api/ContractorApi'

class EditContractorInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.info}
        this.state.oldData = {...this.props.info}
        // this.state.teamLists = []
        this.api = new ContractorApi()
    }

    changeHandler = (e) => {
        const value = e.target.value 
        const name = e.target.name

        this.setState({...this.state, [name]: value})
    }

    checkChanges = (propName) => {
        if (this.state.oldData[propName] === this.state[propName]) {
            return null
        } else {
            return this.state[propName]
        }
    }

    submitHandler = (e) => {
        e.preventDefault()

        const params = {
            id: this.props.info.id,
            body: {
                email: this.checkChanges('email'),
                fullName: this.checkChanges('fullName'),
                inn: this.checkChanges('inn'),
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm,
                phoneNumber: this.checkChanges('phoneNumber'),
                // role: 'ROLE_USER',
                services: 'any service',
                stack: this.checkChanges('stack'),
                telegram: this.checkChanges('telegram'),
                username: this.checkChanges('username')
            }
        }

        if (this.props.type === 'new') {
            this.api.create(params)
        } else {
            this.api.update(params)
        }

        this.props.closeModal()
    }

    render() {
        const state = this.state
        return (
            <div className="edit-contractor-info">
                <h2>Новый подрядчик</h2>
                <form  className="edit-contractor-info__form">
                    <label className="labeled-field">
                        <span className="edit-contractor-info__name-label">Наименование</span>
                        <input type="text" name="fullName" value={state.fullName} onChange={this.changeHandler}/>
                    </label>
                    <label className="labeled-field">
                        <span>Технологический стек</span>
                        <textarea className="edit-contractor-info__technology-stack" name="stack" value={state.stack} onChange={this.changeHandler}></textarea>
                    </label>
                    <div className="form-group-row">
                    <label className="labeled-field">
                        <span>Телефон</span>
                        <input type="tel" name="phoneNumber" value={state.phoneNumber} onChange={this.changeHandler}/>
                    </label>
                    <label className="labeled-field">
                        <span>E-mail</span>
                        <input type="email" name="email" value={state.email} onChange={this.changeHandler}/>
                    </label>
                    </div>
                    <div className="form-group-row">
                    <label className="labeled-field">
                        <span>Telegram</span>
                        <input type="text" name="telegram" value={state.telegram} onChange={this.changeHandler}/>
                    </label>
                    <label className="labeled-field">
                        <span>Выполнено закупок</span>
                        <input type="number"/>
                    </label>
                    </div>
                    <div className="form-group-row">
                    <label className="labeled-field">
                        <span>ИНН</span>
                        <input type="tel" name="inn" value={state.inn} onChange={this.changeHandler}/>
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
                    <label className="labeled-field">
                        <span>Имя пользователя</span>
                        <input type="text" name="username" value={state.username} onChange={this.changeHandler}/>
                    </label>
                    <div className="form-group-row">
                        <label className="labeled-field">
                            <span>Пароль</span>
                            <input type="password" name="password" value={state.password} onChange={this.changeHandler}/>
                        </label>
                        <label className="labeled-field">
                            <span>Повторите пароль</span>
                            <input type="password" name="passwordConfirm" value={state.passwordConfirm} onChange={this.changeHandler}/>
                        </label>
                    </div>
                    <button type="submit" onClick={this.submitHandler} className="btn">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EditContractorInfo