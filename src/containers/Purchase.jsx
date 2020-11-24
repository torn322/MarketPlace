import React from 'react'

import { connect } from 'react-redux'

import TenderCardExtended from '../components/tender/TenderCardExtended'
import Docs from '../components/tender/Docs'
import Questions from '../components/tender/Questions'

import PurchaseApi from '../api/PurchaseApi'
import { clearInfo } from '../actions/purchase'


class Purchase extends React.Component {
    constructor(props) {
        super(props)
        this.api = new PurchaseApi()
    }

    componentDidMount = () => {
        this.api.getCurrent(this.props.match.params.id)
    }

    render() {
        const { info } = this.props.state
        console.log(this.props)
        return (
            <div className="container">
                <h1>Детали закупки</h1>
                <TenderCardExtended info={ info } clearInfo={this.props.clearInfo}/>
                <h2>Документы</h2>
                <Docs />
                <h2>Вопросы по проекту</h2>
                <Questions />  
            </div>
        )
    }
}

const mapStateToProps = store => { 
    return {
      state: store.purchase,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        clearInfo: () => dispatch(clearInfo())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Purchase)

// export default Purchase