import React from 'react'

class SearchForm extends React.Component {
    state = {
        isAdvanced: false
    }

    advancedFiltersRef = React.createRef()

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

    render() {
        return (
            <form className="search-form">
                <div className="search-form__group-row">
                    <div className="search-form__input-wrap">
                        <i className="search-form__search-icon"></i>
                        <input type="text" className="search-form__search-input"/>
                        <span className="search-form__advanced-filters-link" onClick={ this.changeAdvancedStatus}><i className="search-form__advanced-filters-icon"></i> Расширенный поиск</span>
                    </div>
                    <button className="btn">Найти</button>
                </div>
                <div className="search-form__advanced-filters" ref={ this.advancedFiltersRef }>
                    <div className="search-form__group-row">
                        <div className="search-form__group-col">
                            <input type="text" placeholder="Выберите город"/>
                            <input type="text" placeholder="Выберите город"/>
                        </div>
                        <div className="search-form__group-col">
                            <input type="text" placeholder="Выберите город"/>
                            <input type="text" placeholder="Выберите город"/>
                        </div>
                        <div className="search-form__group-col">
                            <input type="text" placeholder="Выберите город"/>
                            <input type="text" placeholder="Выберите город"/>
                        </div>
                    </div>
                </div>
                <hr className="search-form__underline"/>
            </form>
        )
    }
}

export default SearchForm
