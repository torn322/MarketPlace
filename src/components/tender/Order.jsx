import React from 'react'

class Order extends React.Component {
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
                    <div className="form-group-row">
                        <input type="file" placeholder="Выберите файл" draggable className="order__file"/>
                        <button className="btn btn_blue">Загрузить</button>
                    </div>
                    <button type="submit" className="btn">Подать заявку</button>
                </form>
            </div>
        )
    }
}

export default Order