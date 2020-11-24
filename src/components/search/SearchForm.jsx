import React from 'react'

class SearchForm extends React.Component {
    constructor() {
        super()
        this.advancedFiltersRef = React.createRef()
        this.state = {
            isAdvanced: false,
            params: {
                keyWord: '',
                region: '',
                wideSearch: 'false'
            }
        }
    }


    changeAdvancedStatus = () => {        
        if (this.state.isAdvanced) {
            this.advancedFiltersRef.current.classList.remove('search-form__advanced-filters_opened')
            this.advancedFiltersRef.current.classList.add('search-form__advanced-filters_closed')
        } else {
            this.advancedFiltersRef.current.classList.remove('search-form__advanced-filters_closed')
            this.advancedFiltersRef.current.classList.add('search-form__advanced-filters_opened')
        }
        this.setState({isAdvanced: !this.state.isAdvanced})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.clearResult()
        this.setState({
            ...this.state, 
            params: {
                ...this.state.params,
                keyWord: this.state.params.keyWord.trim().replace(/\s+/g, ' ')
            }
        }, () => {
            this.props.onSubmit(this.state.params)    
        })
    }

    changeHandler = (e) => {
        const value = e.target.value 
        const name = e.target.name

        this.setState({...this.state, params: {
            ...this.state.params, [name]: value
        }})

    }


    render() {
        return (
            <form className="search-form">
                <div className="search-form__group-row">
                    <div className="search-form__input-wrap">
                        <i className="search-form__search-icon"></i>
                        <input type="text" name="keyWord" value={this.state.params.keyWord} onChange={this.changeHandler} className="search-form__search-input"/>
                        <span className="search-form__advanced-filters-link" onClick={ this.changeAdvancedStatus}><i className="search-form__advanced-filters-icon"></i> Расширенный поиск</span>
                    </div>
                    <button className="btn" onClick={this.submitHandler}>Найти</button>
                </div>
                <div className="search-form__advanced-filters" ref={ this.advancedFiltersRef }>
                    <div className="search-form__group-row">
                        <div className="search-form__group-col">
                            <input type="text" name="region" value={this.state.params.region} onChange={this.changeHandler} placeholder="Укажите регион"/>
                            {/* <select name="wideSearch" value={this.state.params.wideSearch} onChange={this.changeHandler}>
                                <option value="false">Только в заголовке</option>
                                <option value="true">Искать везде</option>
                            </select> */}
                        </div>
                        {/* <div className="search-form__group-col">
                            <input type="text" placeholder="Выберите город"/>
                            <input type="text" placeholder="Выберите город"/>
                        </div>
                        <div className="search-form__group-col">
                            <input type="text" placeholder="Выберите город"/>
                            <input type="text" placeholder="Выберите город"/>
                        </div> */}
                    </div>
                </div>
                <hr className="search-form__underline"/>
            </form>
        )
    }
}

export default SearchForm
