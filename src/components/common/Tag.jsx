import React from 'react'

class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.index = this.props.index
    }

    clickHandler = () => {
        if (this.props.canBeDeleted) {
            this.props.handleDelete(this.index)
        }
    }


    render() {
        const { name, amount } = this.props
        return (
            <span className="tag" onClick={this.clickHandler}>{ name }<span className="tag__amount" ><small>x</small>{ amount }</span></span>
        )
    }
}

export default Tag