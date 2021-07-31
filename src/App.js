import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App