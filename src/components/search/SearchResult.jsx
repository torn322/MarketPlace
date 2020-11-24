import React from 'react'

import SearchResultItem from './SearchResultItem'
import PurchaseCardPlug from '../loading/PurchaseCardPlug'






class SearchResult extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount = () => {
        this.props.clearResult()
        console.log('unmount')
    }

    render() {
        const { type, err } = this.props
        const result = this.props.result
        if (result)
            return (
                <ul className="search-result">
                    {result.map(item => <SearchResultItem key={item.id} type={type} item={item} />)}
                </ul>
            )
        else if (err)
            return <span className="search-err">{err}</span>
        else
            return (
                <React.Fragment>
                    <PurchaseCardPlug />
                    <PurchaseCardPlug />
                    <PurchaseCardPlug />
                    <PurchaseCardPlug />
                </React.Fragment>
            )
    }
}

export default SearchResult