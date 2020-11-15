import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Search from './Search'
import Tender from './Tender'



class Content extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/tender/:id' component={Tender}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


  
export default Content

