import React from 'react'
import File from '../common/File'

class Docs extends React.Component {
    render() {
        return (
            <div className="docs">
                {/* <span className="docs__doc">
                    <span className="docs__name">Характеристики</span>
                    <span className="docs__type">ZIP</span>
                </span>
                <span className="docs__doc">
                    <span className="docs__name">Характеристики</span>
                    <span className="docs__type">ZIP</span>
                </span>
                <span className="docs__doc">
                    <span className="docs__name">Характеристики</span>
                    <span className="docs__type">ZIP</span>
                </span> */}
                <File fullFileName="Характеристики.docx"/>
                <File fullFileName="ТЗ.docx"/>
                <File fullFileName="Референсы.zip"/>
            </div>
        )
    }
}

export default Docs