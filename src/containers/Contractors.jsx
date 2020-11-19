import React from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'

class Contractors extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Все подрядчики</h1>
                <SearchForm />
                <SearchResult type="contractor"/>
            </div>
        )
    }
}

export default Contractors