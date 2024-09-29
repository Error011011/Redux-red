import React from 'react'
import { useFavourites } from '../hooks/useFavourites'

const Header = () => {
   const favourites = useFavourites()


  return (
    <div>
        <h1>Amount of fav</h1>
        <span>{favourites.length}</span>
    </div>
    
  )
}

export default Header