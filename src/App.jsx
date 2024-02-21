import React, { useState } from 'react';
import axios from 'axios';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import { Header, AppNameComponent, AppIcon, SearchIcon, SearchComponent, SearchInput, Container } from './component/HeaderComponent';
import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsText, SeeMoreText } from './component/RecipeComponent';
import { Dialog } from '@mui/material';


const RecipeComponent = ({ recipeObj }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Dialog open={show}>working...</Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} alt='product-image' />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)} > Ingredients</IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
      </RecipeContainer >
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
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="brand-img" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="search-icon" />
          <SearchInput placeholder='Search Recipe' type='search' onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length && recipeList.map((recipeObj) => <RecipeComponent recipeObj={recipeObj.recipe} />)}
      </RecipeListContainer>
    </Container>
  )
}

export default App
