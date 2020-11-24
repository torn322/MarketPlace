import React from 'react'
import File from '../File'


class FileInput extends React.Component {
    constructor(props) {
        super(props)
        this.typeFileRef = React.createRef()
        this.state = {
            files: this.props.files || []
        }
    }

    clickHandler = (e) => {
        e.preventDefault()
        this.typeFileRef.current.click()
    }

    changeHandler = (e) => {
        const files = e.target.files
        this.props.onChange(files)
        this.setState({files})
    }



    render() {
        const { files } = this.state
        return (
            <div className="fileinput">
                <div className="fileinput__input">
                    <span className="fake-input">
                        <input type="file" draggable multiple className="fileinput__type-file" onChange={this.changeHandler} ref={this.typeFileRef}/>
                        <span>Выберите файл</span>
                    </span>
                    <button className="btn btn_blue" onClick={this.clickHandler}>Загрузить</button>
                </div>
                <div className="fileinput__files">
                    {Array.from(files).map((file, i) => <File 
                        key={i}
                        index={i}
                        fullFileName={ file.name }
                    />)}
                </div>
            </div>
        )
    }
}

export default FileInput