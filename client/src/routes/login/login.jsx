import { useState } from 'react'
import './login.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import apiRequest from '../../lib/apiRequest'

function Login () {
  // STATES
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  //OTHER HOOKS
  const navigate = useNavigate()

  // HANDLE SUBMIT
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const formData = new FormData(e.target)

    const username = formData.get('username')
    const password = formData.get('password')
    try {
      const res = await apiRequest.post('/auth/login', {
        username,
        password
      })
      localStorage.setItem('user', JSON.stringify(res.data))
      // console.log(res)
      navigate('/')
    } catch (err) {
      // console.log(error)
      // setError(err.res.data.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='login'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name='username'
            minLength={3}
            maxLength={20}
            type='text'
            placeholder='Username'
          />
          <input
            name='password'
            required
            type='password'
            placeholder='Password'
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to='/register'>{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}

export default Login
