import React from 'react'

import SearchForm from './SearchForm'
import SearchResultItem from './SearchResultItem'





class SearchResult extends React.Component {
    render() {
        return (
            <ul className="search-result">
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
            </ul>
        )
    }
}

export default SearchResult