import React from 'react';
import { Header, AppNameComponent, AppIcon, SearchIcon, SearchComponent, SearchInput, Container } from './component/HeaderComponent';



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
    </Container>
  )
}

export default App
