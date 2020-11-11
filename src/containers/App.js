import React from 'react'
import Header from './Header'
import Content from './content'



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default App