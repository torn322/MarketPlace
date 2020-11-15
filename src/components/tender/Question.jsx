import React from 'react'

class Question extends React.Component {
    render() {
        return (
            <div className="question">
                <i className="question__pic"></i>
                <h3 className="question__title">Заголовок вопроса</h3>
                <p className="question__answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque a auctor turpis. Quisque ac cursus justo. Suspendisse suscipit eros at finibus 
                    pellentesque. Donec at bibendum leo. Vestibulum elementum nulla eu elit dictum tristique. Nunc </p>
                    <div className="question__date">27.10.2020</div>
            </div>
        )
    }
}

export default Question