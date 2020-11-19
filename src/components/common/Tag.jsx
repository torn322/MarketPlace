import React from 'react'

class Tag extends React.Component {
    constructor(props) {
        super(props)
        this.index = this.props.index
    }


    render() {
        const { name, amount, handleDelete } = this.props
        return (
            <span className="tag" onClick={()=> handleDelete(this.index) }>{ name }<span className="tag__amount" ><small>x</small>{ amount }</span></span>
        )
    }
}

export default Tag