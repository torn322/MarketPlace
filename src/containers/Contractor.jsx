import React from 'react'
import ContractorCardExtended from '../components/contractors/ContractorCardExtended'
import SearchResult from '../components/search/SearchResult'
import { connect } from 'react-redux'

import ContractorApi from '../api/ContractorApi'



class Contractor extends React.Component {
    constructor(props) {
        super(props)
        this.api = new ContractorApi()
    }

    componentDidMount = () => {
        this.api.getCurrent(this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        const {info} = this.props.state
        return (
            <div className="container">
                <h1>Страница подрядчика</h1>
                <ContractorCardExtended info={info}/>
                <h2>Выполненные закупки</h2>
                {/* <SearchResult type="tender"/> */}
                <div className="tender-card">
                <i className="tender-card__indicator"></i>
                <div className="tender-card__header">
                    <h3 className="tender-card__title">Создать систему налогового учета</h3>
                    <span className="tender-card__price">270 000<small>,00</small> Р</span>
                </div>
                <p className="tender-card__description">Краткое описание проекта, которое поможет потенциальным поставщикам лучше понять суть задачи.</p>
                <div className="tender-card__footer">
                <span className="tender-card__region">Томск</span>
                <span className="tender-card__finish-date">Подача заявок до: <span className="pink">11.11.2020</span></span>
                </div>
            </div>
            </div>
        )
    }
}


const mapStateToProps = store => { 
    return {
      state: store.contractor,
    }
  }

export default connect(
    mapStateToProps,
    )(Contractor)

// export default Contractor