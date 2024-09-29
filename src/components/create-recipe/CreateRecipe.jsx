import React, { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'

// fix create recipe
// https://redux-toolkit.js.org/rtk-query/usage/mutations
// https://themealdb.com/api/json/v1/1/search.php?f=a


const CreateRecipe = () => {

    const defaultValue = {
        name: '',
        image: ''
    }

    const [recipe, setRecipe] = useState({
        name: '',
        image: ''
    })

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        createRecipe(recipe).then(()=> {
            setRecipe(defaultValue)
        })
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <label>
                <input onChange={e => setRecipe({...recipe, name: e.target.value})} type="text" placeholder='Name' value={recipe.name}/>
                <input onChange={e => setRecipe({...recipe, image: e.target.value})} type="text" placeholder='Image' value={recipe.image} />
            </label>
            <button type='Submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateRecipe