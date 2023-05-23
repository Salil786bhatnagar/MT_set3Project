import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './Index'
export default function MainRouter(props) {
  return (
    <div>
        <Router>
             <Switch>
                 <Route
                    path="/"
                    component={Index}
                    exact
                    strict
                    history={props.history}
                 />
             </Switch>
        </Router>
    </div>
  )
}
