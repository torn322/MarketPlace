import React from 'react'

import SearchForm from './SearchForm'
import SearchResultItem from './SearchResultItem'





class SearchResult extends React.Component {
    render() {
        const { type } = this.props
        return (
            <ul className="search-result">
                <SearchResultItem type={ type }/>
                <SearchResultItem type={ type }/>
                <SearchResultItem type={ type }/>
                <SearchResultItem type={ type }/>
            </ul>
        )
    }
}

export default SearchResult