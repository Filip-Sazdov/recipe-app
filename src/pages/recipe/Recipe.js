import './Recipe.css'

import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function Recipe() {

  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const { data: recipe, isLoading, error } = useFetch(url)

  return (
    <div className='recipe'>
      {isLoading && <h1 className='loading'>Recipes are loading...</h1>}
      {error && <h1 className='error'>The following error occured: {error}</h1>}

      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to prepare.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
