import './Create.css'

import React, { useRef, useState } from 'react'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
  }

  const handleAdd = (e) => {
    e.preventDefault()

    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient.trim()])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Add Title</span>
          <input
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Add Ingredients (one at a time)</span>
          <div className="ingredients">

            <input
              type="text"
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}

              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>add</button>

          </div>

        </label>
        <p>Ingredients list: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>


        <label>
          <span>Cooking Method</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (Minutes)</span>
          <input
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>


    </div>
  )
}
