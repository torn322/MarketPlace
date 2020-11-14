import React from 'react'

class SearchForm extends React.Component {

    render() {
        const { advancedSearchHandler, isAdvanced } = this.props
        console.log('aaa', isAdvanced)
        return (
            <form className="search-form">
                <div className="search-form__group-row">
                    <div className="search-form__input-wrap">
                        <i className="search-form__search-icon"></i>
                        <input type="text" className="search-form__search-input"/>
                        <span className="search-form__advanced-filters-link" onClick={() => advancedSearchHandler(isAdvanced)}><i className="search-form__advanced-filters-icon"></i> Расширенный поиск</span>
                    </div>
                    <button className="btn">Найти</button>
                </div>
                <div className="search-form__advanced-filters">
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
