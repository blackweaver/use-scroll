import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import Navbar from './pages/navbar'
import Position from './pages/position'
import Sidebar from './pages/sidebar'

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App" />
        <Route exact path="/" component={Navbar} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/position" component={Position} />
        <Route exact path="/sidebar" component={Sidebar} />
      </ScrollToTop>
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
