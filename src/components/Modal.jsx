import React from 'react'
import { connect } from 'react-redux'


class Modal extends React.Component {

    render() {
        const { content, isVisible, handler } = this.props
        
        if (isVisible)
        return (
            <React.Fragment>
                <div className="modal-wrap">
                <div className="modal-bg-dark" onClick={handler}></div>
                    <div className="modal">
                        <div className="modal__header">
                            <div className="modal__close" onClick={handler}>X</div>
                        </div>
                            {content}
                    </div>
                </div>
            </React.Fragment>
        )
        return null
    }
}

export default Modal