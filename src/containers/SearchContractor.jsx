import React from 'react'

import ContractorApi from '../api/ContractorApi'
import { connect } from 'react-redux'


import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'
import EditContractorInfo from '../components/contractors/EditContractorInfo'

import Modal from '../components/Modal'

import {clearResult} from '../actions/search'


class SearchContractor extends React.Component {
    constructor(props) {
        super(props)
        this.api = new ContractorApi()
        this.state = {
            isModalVisible: false
        }
    }

    componentDidMount = () => {
        this.api.get()
    }

    modalHandler = () => {
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

    render() {
        const {state, clearResult} = this.props
        const result = state.result ? state.result.content : null
        return (
            <div className="container">
                <div className="container-header">
                    <h1>Все подрядчики</h1>
                    <button className="btn btn_blue" onClick={this.modalHandler}>Новый подрядчик</button>
                </div>
                <SearchForm />
                <SearchResult type="contractor" result={result} clearResult={clearResult}/>
                {this.state.isModalVisible ? 
                    <Modal handler={this.modalHandler}>
                        <EditContractorInfo type="new" closeModal={this.modalHandler} info={{}}/>
                    </Modal> : null}
            </div>
        )
    }
}

const mapStateToProps = store => { 
    return {
      state: store.search,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        clearResult: () => dispatch(clearResult())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchContractor)


// export default SearchContractor 