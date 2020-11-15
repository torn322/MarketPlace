import React from 'react'
import { Link } from 'react-router-dom'

import TenderCard from '../tender/TenderCard'

class SearchResultItem extends React.Component {
    render() {
        return (
            <li className="search-result__item">
                <Link to='tender/tenderId' className='search-result__link'>
                    <TenderCard />
                </Link>
            </li>
        )
    }
}

export default SearchResultItem