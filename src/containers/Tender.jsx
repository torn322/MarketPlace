import React from 'react'
import TenderCard from '../components/tender/TenderCard'
import TenderCardExtended from '../components/tender/TenderCardExtended'
import Docs from '../components/tender/Docs'
import Questions from '../components/tender/Questions'

class Tender extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Детали процедцры</h1>
                <TenderCardExtended />
                <h2>Документы</h2>
                <Docs />
                <h2>Вопросы по проекту</h2>
                <Questions />                
            </div>
        )
    }
}

export default Tender