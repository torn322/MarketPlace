import React from 'react'
import { connect } from 'react-redux'

import SearchForm from '../components/search/SearchForm'
import SearchResult from './SearchResult'

import { advancedSearchHandler } from '../actions/search'

class Content extends React.Component {
    render() {
        console.log(this.props)
        const { isAdvanced } = this.props.search.form
        const { advancedSearchHandler } = this.props
        return (
            <div className="container">
                <h1>Все процедуры</h1>
                <SearchForm advancedSearchHandler={ advancedSearchHandler } isAdvanced={ isAdvanced }/>
                <SearchResult />
            </div>
        )
    }
}


const mapStateToProps = store => { 
    console.log(store)
    return {
      search: store.search,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        advancedSearchHandler: (isAdvanced) => dispatch(advancedSearchHandler(isAdvanced))
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Content)

// export default Content