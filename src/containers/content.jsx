import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Search from './Search'
import Tender from './Tender'
import Contractors from './Contractors'
import Contractor from './Contractor'



class Content extends React.Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/tender/:id' component={Tender}/>
                    <Route exact path='/contractors' component={Contractors}/>
                    <Route path='/contractors/:id' component={Contractor}/>
                </Switch>
        )
    }
}


  
export default Content

