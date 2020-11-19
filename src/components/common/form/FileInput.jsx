import React from 'react'


class FileInput extends React.Component {
    render() {
        return (
            <div className="form-group-row">
                <input type="file" placeholder="Выберите файл" draggable className="order__file"/>
                <button className="btn btn_blue">Загрузить</button>
            </div>
        )
    }
}

export default FileInput