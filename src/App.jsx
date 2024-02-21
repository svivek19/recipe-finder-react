import React from 'react';
import { Header, AppNameComponent, AppIcon, SearchIcon, SearchComponent, SearchInput, Container } from './component/HeaderComponent';
import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsText, SeeMoreText } from './component/RecipeComponent';


const App = () => {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="brand-img" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="search-icon" />
          <SearchInput placeholder='Search Recipe' />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png" alt="" />
          <RecipeName>name of the</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  )
}

export default App
