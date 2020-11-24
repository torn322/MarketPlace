import React from 'react'
import Tag from '../Tag'


class TagInput extends React.Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef()
        this.amountRef = React.createRef()
        this.state = {
            currentTag: {
                role: '',
                count: 1,
            },
            taglist: this.props.tagList || []
        }
    }

    handleKeyPress = (e) => {
        console.log(e.keyCode)
        if (e.keyCode === 13 && (document.activeElement === this.nameRef.current || document.activeElement === this.amountRef.current )) {
            return null
        }
    }

    handleChange = (e) => {
        let value = e.target.value 
        const name = e.target.name

        if (name === 'count') {
            value = parseInt(value)
        }

        this.setState({...this.state,  currentTag: {
            ...this.state.currentTag, [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.currentTag.role.replaceAll(' ', '').length) {
            this.setState((state) => {
                let taglist = state.taglist
                
                state.currentTag.count = state.currentTag.count < 1 ? 1 : state.currentTag.count
                taglist.push(state.currentTag)

                const newState = {
                    currentTag: {
                        role: '',
                        count: ''
                    },
                    taglist
                }

                return newState
            })

            this.props.onChange(this.state.taglist)
        }
    }

    handleDelete = (index) => {
        this.setState(() => {
            let taglist = this.state.taglist
            taglist.splice(index, 1)
            
            return taglist 
        })

        this.props.onChange(this.state.taglist)
    }

    render() {
        const { taglist, currentTag } = this.state
        return (
            <div className="taginput">
                <div className="form-group-row">
                    <div className="taginput__input">
                        <input ref={this.nameRef} type="text" name="role" className="taginput__text"value={currentTag.role} onChange={this.handleChange}/>
                        <hr/>
                        <input ref={this.amountRef} type="number" name="count" className="taginput__amount"value={currentTag.count} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn_blue" onClick={this.handleSubmit} onKeyPress={this.handleKeyPress}>Добавить</button>
                </div>
                <div className="taginput__tags">
                    {taglist.map((item, i) => <Tag 
                        name={ item.role } 
                        amount={ item.count }
                        index={ i }
                        key={ i }
                        canBeDeleted = {true}
                        handleDelete={ this.handleDelete }
                    />)}
                </div>
            </div>
        )
    }
}

export default TagInput