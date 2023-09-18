import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  // Add logic to show appropriate links based on user role (admin or non-admin)
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/your-transactions">Your Transactions</Link>
        </li>
        {/* Add other links based on user role */}
      </ul>
    </div>
  )
}

export default Sidebar
