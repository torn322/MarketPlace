import React from 'react'
import SearchForm from '../components/search/SearchForm'
import SearchResult from './SearchResult'

class Content extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Все процедуры</h1>
                <SearchForm />
                <SearchResult />
            </div>
        )
    }
}

export default Content