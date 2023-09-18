import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post('API_URL', {
        email,
        password,
      })

      // Handle successful login
    } catch (error) {
      setError('Invalid email or password')
    }

    setLoading(false)
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {loading ? (
          <button disabled>Loading...</button>
        ) : (
          <button type="submit">Login</button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
