import React, { useState } from 'react';
import axios from 'axios';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Header from './component/HeaderComponent';
import Recipe from './component/RecipeComponent';
import { Dialog } from '@mui/material';
import styled from 'styled-components';

const Placeholder = styled.img`
width:120px;
height:120px;
margin:200px;
opacity:50%;
`;

const RecipeComponent = ({ recipeObj }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>See More</Recipe.IngredientsText>
          <Recipe.SeeMoreText onClick={() => setShow(false)}>Close</Recipe.SeeMoreText>
        </DialogActions>
      </Dialog>
      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} alt='product-image' />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setShow(true)} > Ingredients</Recipe.IngredientsText>
        <Recipe.SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</Recipe.SeeMoreText>
      </Recipe.RecipeContainer >
    </>
  )
};

const App = () => {

  const [timeoutId, setTimeoutId] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const apiid = import.meta.env.VITE_API_ID;
  const apikey = import.meta.env.VITE_API_KEY;

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${apiid}&app_key=${apikey}`);
    setRecipeList(response.data.hits);
  }

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 1000);
    setTimeoutId(timeout);
  };

  return (
    <Header.Container>
      <Header.Header>
        <Header.AppNameComponent>
          <Header.AppIcon src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="brand-img" />
          Recipe Finder
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="search-icon" />
          <Header.SearchInput placeholder='Search Recipe' type='search' onChange={onTextChange} />
        </Header.SearchComponent>
      </Header.Header>
      <Recipe.RecipeListContainer>
        {recipeList.length ? recipeList.map((recipeObj) => <RecipeComponent recipeObj={recipeObj.recipe} />):<Placeholder src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png"/>}
      </Recipe.RecipeListContainer>
    </Header.Container>
  )
}

export default App
