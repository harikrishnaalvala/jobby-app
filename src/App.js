import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import YourTransactions from './components/YourTransactions'
import AllTransactions from './components/AllTransactions'

const App = () => {
  // Add authentication logic here to check if the user is logged in
  // If not logged in, redirect to the Login page

  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/your-transactions" component={YourTransactions} />
          <Route path="/all-transactions" component={AllTransactions} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
