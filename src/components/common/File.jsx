import React from 'react'

class File extends React.Component {

    clickHandler = () => {
        if (this.props.canBeDeleted) {
            this.props.deleteHandler(this.props.index)
        }
    }

    render() {
        const {fullFileName} = this.props
        let name = fullFileName.split('.')
        const type = name[name.length - 1]
        name = name.splice(name.lenght - 1, 1)
        name = name.join('.')

        return (
            <div className="file-wrap">
                <span className={`file`} onClick={this.clickHandler}>
                    <span className="file__name">{ name }</span>
                    <span className="file__type">{ type }</span>
                </span>
            </div>
        )
    }
}

export default File