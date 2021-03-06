import React from 'react'
import FileInput from '../common/form/FileInput'

class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: null
        }
    }

    addFiles = (files) => {
        this.setState({files})
    }

    render() {
        return (
            <div className="order">
                <h2 className="order__title">Оставьте свою заявку</h2>
                <p className="order__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque a auctor turpis. Quisque ac cursus justo. Suspendisse 
                    suscipit eros at finibus 
                </p>
                <form action="" className="order__form">
                    <textarea className="order__message" placeholder="Напишите сообщение" required></textarea>
                    <FileInput onChange={this.addFiles}/>
                    <button type="submit" className="btn">Подать заявку</button>
                </form>
            </div>
        )
    }
}

export default Order