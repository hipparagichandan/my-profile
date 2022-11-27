import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'
import Feed from './Feed'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Gallery from './Gallery'


const App = () => {
  return (
    <>
        <Header />
        {/* <Feed /> */}

        <Route path={'/'} component={Home} exact />
        <Route path={'/about'} component={About} />
        <Route path={'/gallery'} component={Gallery} />

        <Footer />
        

    </>
  )
}

export default App