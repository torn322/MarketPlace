import React from 'react'
import TenderCard from '../TenderCard'

class SearchResultItem extends React.Component {
    render() {
        return (
            <li className="search-result__item">
                <TenderCard />
            </li>
        )
    }
}

export default SearchResultItem