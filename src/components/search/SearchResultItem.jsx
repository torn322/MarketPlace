import React from 'react'
import { Link } from 'react-router-dom'

import TenderCard from '../tender/TenderCard'
import ContractorCard from '../contractors/ContractorCard'

class SearchResultItem extends React.Component {
    componentHandler = () => {
        switch (this.props.type) {
            case 'tender':
                return (
                    <Link to='tender/tenderId' className='search-result__link'>
                        <TenderCard />
                    </Link>
                )
            case 'contractor':
                return (
                    <Link to='contractors/contractorId' className='search-result__link'>
                        <ContractorCard />
                    </Link>
                )
        
            default:
                console.error('Invalid component type - ' + this.props.type )
                break
        }
    }

    render() {
        return (
            <li className="search-result__item">
                { this.componentHandler() }
            </li>
        )
    }
}

export default SearchResultItem