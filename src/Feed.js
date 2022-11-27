import React from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './About'
import Gallery from './Gallery'
import Home from './Home'

const Feed = () => {
  return (
    <div>
        <Switch>
            <Route path={'/'} component={Home} exact />
            <Route path={'/about'} component={About} />
            <Route path={'/gallery'} component={Gallery} />
        </Switch>
        

    </div>
  )
}

export default Feed