import RecipeItem from './components/recipeItem/RecipeItem.jsx'
import Header from './components/Header'
import User from './components/user/User'
import { useGetRecipesQuery } from './store/api/api.js';
import CreateRecipe from './components/create-recipe/CreateRecipe.jsx';

const userId = 1

function App() {

  const {isLoading, data} = useGetRecipesQuery(undefined, {
    skip: !userId,
  })

  

  
  return (
    <div className="App">
      <Header/>
      {/* <User/> */}

      <CreateRecipe/>
      <section>

      {isLoading ? <div>Loading...</div> : data ? data.map(recipe =>
        <RecipeItem key={recipe.id} recipe = {recipe}/>
       ) : <div>NOT FOUND</div>}
      
      </section>

      
    </div>
  );
}

export default App;
