import './Home.css'

import React from 'react'

import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const url = 'http://localhost:3000/recipes'
  const { data: recipes, isLoading, error } = useFetch(url)

  return (
    <div className='home'>
      {isLoading && <h1 className='loading'>Recipes are loading...</h1>}
      {error && <h1 className='error'>The following error occured: {error}</h1>}

      {recipes && <RecipeList recipes={recipes} />}
    </div >
  )
}
