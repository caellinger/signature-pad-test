import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SigPad from './SigPad'
import ImagesIndexContainer from './ImagesIndexContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SigPad} />
        <Route path="/images" component={ImagesIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
