import React from 'react'
import { connect } from 'react-redux'

import SearchForm from '../components/search/SearchForm'
import SearchResult from '../components/search/SearchResult'

import PurchaseApi from '../api/PurchaseApi'

import Modal from '../components/Modal'
import EditPurchase from '../components/tender/EditPurchase'

import {clearResult} from '../actions/search'





class Search extends React.Component {
    constructor (props) {
        super(props)
        this.api = new PurchaseApi()
        this.state = {
            isModalVisible: false
        }
    }

    componentDidMount = () => {
        this.api.get()
        console.log('mount')
    }

    submitHandler = (params) => {
        this.api.get(params)
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
                    <h1>Все закупки</h1>
                    <button className="btn btn_blue" onClick={this.modalHandler}>Новая закупка</button>
                </div>
                <SearchForm onSubmit={this.submitHandler} clearResult={clearResult}/>
                <SearchResult type="tender" result={result} err={state.err} clearResult={clearResult}/>
                {this.state.isModalVisible ? 
                    <Modal handler={this.modalHandler}>
                        <EditPurchase type="new" closeModal={this.modalHandler} info={{}}/>
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
    mapDispatchToProps
    )(Search)

// export default Search