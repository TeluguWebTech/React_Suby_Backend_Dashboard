import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='errorSection'>
    <Link to="/" style={{ fontSize:'1.5rem', color: 'darkblue'}}>
        <p>go back</p>
    </Link>
        <h1>404</h1>
        <div>Page Not found</div>

    </div>
    </>
    
  )
}

export default NotFound