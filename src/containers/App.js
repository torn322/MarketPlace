import React from 'react'
import Header from './Header'
import Content from './content'



class App extends React.Component {
  render() {
    const { store } = this.props
    return (
      <React.Fragment>
        <Header />
        <Content store={ store }/>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default App