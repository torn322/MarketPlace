import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Search from './SearchPurchase'
import Purchase from './Purchase'
import SearchContractor from './SearchContractor'
import Contractor from './Contractor'




class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Search} />
                <Route path='/purchase/:id' component={Purchase}/>
                <Route exact path='/contractor' component={SearchContractor}/>
                <Route path='/contractor/:id' component={Contractor}/>
            </Switch>
        )
    }
}


  
export default Content

