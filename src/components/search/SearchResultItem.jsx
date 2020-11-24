import React from 'react'
import { Link } from 'react-router-dom'

import TenderCard from '../tender/TenderCard'
import ContractorCard from '../contractors/ContractorCard'

class SearchResultItem extends React.Component {
    componentHandler = () => {
        const {item} = this.props
        switch (this.props.type) {
            case 'tender':
                return (
                    <Link to={`purchase/${item.id}`} className='search-result__link'>
                        <TenderCard info={item}/>
                    </Link>
                )
            case 'contractor':
                return (
                    <Link to={`contractor/${item.id}`} className='search-result__link'>
                        <ContractorCard info={item}/>
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