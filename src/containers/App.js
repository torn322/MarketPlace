import React from 'react'
import Header from './Header'
import Content from './content'
import {BrowserRouter} from 'react-router-dom'




class App extends React.Component {
  render() {
    const { store } = this.props
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Content store={ store }/>
          {/* <Footer /> */}
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App