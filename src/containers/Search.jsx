import React from 'react'
import { connect } from 'react-redux'

import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'




class Search extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Все процедуры</h1>
                <SearchForm />
                <SearchResult type="tender"/>
            </div>
        )
    }
}

// const mapStateToProps = store => { 
//     return {
//       search: store.search,
//     }
//   }
  
// const mapDispatchToProps = dispatch => {
//     return {
//         advancedSearchHandler: (isAdvanced) => dispatch(advancedSearchHandler(isAdvanced))
//     }
//   }
  
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//     )(Search)

export default Search