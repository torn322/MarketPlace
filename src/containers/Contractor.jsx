import React from 'react'
import Contractors from './Contractors'
import ContractorCardExtended from '../components/contractors/ContractorCardExtended'
import SearchResult from '../components/search/SearchResult'




class Contractor extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Страница подрядчика</h1>
                <ContractorCardExtended />
                <h2>Выполненны закупки</h2>
                <SearchResult type="tender"/>
            </div>
        )
    }
}

export default Contractor