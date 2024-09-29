import React from 'react'
import '../../App.css'
// import { useDispatch, useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { useFavourites } from '../../hooks/useFavourites'

const RecipeItem = ({recipe}) => {

   const favourites = useFavourites() 

   const isExists =  favourites.some(r => r.id === recipe.id)
   
   const {toggleFavourites} = useActions()
   

    
  return (
    <div className='recipe-item'>
        <h2>{recipe.name}</h2>
        <img width={100} src={recipe.image} alt="" />
        <button onClick={()=> {toggleFavourites(recipe)}}>
          {isExists ? 'Remove from' : 'Add to'} favourites</button>
    </div>
  )
}

export default RecipeItem