import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'


class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.el = document.createElement('div')
        this.modalContentRef = React.createRef()
    }


    componentDidMount = () => {
        this.modalContentRef.current.appendChild(this.el)
    }
    
    componentWillUnmount = () => {
        this.modalContentRef.current.removeChild(this.el)
    }

    render() {
        const { handler } = this.props
        return (
            <React.Fragment>
                <div className="modal-wrap">
                <div className="modal-bg-dark" onClick={handler}></div>
                    <div className="modal">
                        <div className="modal__header">
                            <div className="modal__close" onClick={handler}>X</div>
                        </div>
                        <div className="modal__content" ref={ this.modalContentRef }>
                            { ReactDOM.createPortal(this.props.children, this.el) }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal