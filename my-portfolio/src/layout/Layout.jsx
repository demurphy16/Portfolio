import React from 'react'


import Nav from './Nav'
import Footer from './Footer'
import './Layout.css'


function Layout(props) {

  return (
    <div className="App">
      <Nav />
      {props.children}
      <Footer />
    </div>
  )

}

export default Layout