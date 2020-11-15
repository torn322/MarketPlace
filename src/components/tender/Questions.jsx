import React from 'react'
import Question from './Question'


class Questions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form action="" className="question-form">
                    <div className="form-group-row">
                        <input type="text" required placeholder="Напишите сообщение"/>
                        <button type="submit" className="btn">Задать вопрос</button>
                    </div>
                    <hr className="form-underline"/>
                </form>
                <ul className="questions">
                    <li className="questions__item">
                        <Question />
                    </li>
                    <li className="questions__item">
                        <Question />
                    </li>
                    <li className="questions__item">
                        <Question />
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Questions