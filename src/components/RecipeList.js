import './RecipeList.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>Cooking time: {recipe.cookingTime}</p>
          {/* <p>Ingredients:</p>
          <p>{recipe.ingredients}</p> */}
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>

      ))}
    </div>
  )
}