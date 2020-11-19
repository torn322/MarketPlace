import React from 'react'
import Tag from '../Tag'


class TagInput extends React.Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef()
        this.amountRef = React.createRef()
        this.state = {
            currentTag: {
                name: '',
                amount: '',
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
        const value = e.target.value
        const name = e.target.name

        this.setState({...this.state,  currentTag: {
            ...this.state.currentTag, [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.currentTag.name.replaceAll(' ', '').length) {
            this.setState((state) => {
                let taglist = state.taglist
                taglist.push(state.currentTag)

                const newState = {
                    currentTag: {
                        name: '',
                        amount: ''
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
                        <input ref={this.nameRef} type="text" name="name" className="taginput__text"value={currentTag.name} onChange={this.handleChange}/>
                        <hr/>
                        <input ref={this.amountRef} type="tel" name="amount" className="taginput__amount"value={currentTag.amount} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn_blue" onClick={this.handleSubmit} onKeyPress={this.handleKeyPress}>Добавить</button>
                </div>
                <div className="taginput__tags">
                    {taglist.map((item, i) => <Tag 
                        name={ item.name } 
                        amount={ item.amount }
                        index={ i }
                        key={ i }
                        handleDelete={ this.handleDelete }
                    />)}
                </div>
            </div>
        )
    }
}

export default TagInput