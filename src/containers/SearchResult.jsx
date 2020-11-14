import React from 'react'
import SearchForm from '../components/search/SearchForm'
import SearchResultItem from '../components/search/SearchResultItem'





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