import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './contacts.css'
import { Link } from 'react-router-dom'
const Recipe = () => {

    const API_KEY= '5639387dfce34aba85f5647210a06992'
 
    const fetchRecipes = async () => {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch`,
            {
              params: {
                apiKey: API_KEY,
                query: searchData,    
                number: 20,     
              },
            }
          );
          setData(response.data.results);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
        console.log(data)
      };

      const handlesubmit=(e)=>{
        e.preventDefault();
        fetchRecipes()
      }



const [data, setData] =useState('');
const [searchData, setSearchData]= useState('');
// const [recipe, setRecipe] = useState(null)

  return (
    <div>
  <header className="header">
    <div className="header__logo">Recipe</div>
    <div className="header__search">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          className="header__search-input"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit" className="header__search-button">
          Search
        </button>
      </form>
    </div>
    
  </header>

  <main>
    <div className="recipe-grid">
      {data.length > 0 ? (
        data.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
              alt={recipe.title}
            />
            <h3 className="recipe-card__title">{recipe.title}</h3>
            <Link
              to={`/details/${recipe.id}`}
              className="recipe-card__button"
            >
              Details
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center">No recipes found.</p>
      )}
    </div>
  </main>
</div>

  )
}

export default Recipe
