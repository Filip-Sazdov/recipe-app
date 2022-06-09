import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to={'/'} className='brand'>
          <h1>Recipes Galore</h1>
        </Link>
        <Link to={'/create'}>
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}
