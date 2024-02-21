import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
`
const Header = styled.div`
color:white;
background-color:darkgreen;
display:flex;
justify-content:space-between;
flex:direction:row;
padding:20px;
font-size: 25px;
font-weight:bold;
box-shaddow:0 3px 6px #555;
align-items:center;
`;

const AppNameComponent = styled.div`
display:flex;
align-items:center;
font-size: 25px;
`;

const AppIcon = styled.img`
width:40px;
height:40px;
margin-right:10px;
`;

const SearchIcon = styled.img`
width:23px;
height:23px;
`;

const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color: white;
padding:10px;
border-radius:6px;
width:50%;
`;

const SearchInput = styled.input`
border:none;
outline:none;
width:100%;
margin-left:15px;
font-size: 16px;
font-weight:bold;
`

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
          <SearchInput placeholder='Search Recipe'/>
        </SearchComponent>
      </Header>
    </Container>
  )
}

export default App
