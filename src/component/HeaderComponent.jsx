import styled from 'styled-components';

export const Header = styled.div`
color:white;
background-color:darkgreen;
display:flex;
justify-content:space-between;
flex:direction:row;
padding:20px;
font-size: 25px;
font-weight:bold;
box-shadow:0 3px 6px #555;
align-items:center;
`;

export const AppNameComponent = styled.div`
display:flex;
align-items:center;
font-size: 25px;
`;

export const AppIcon = styled.img`
width:40px;
height:40px;
margin-right:10px;
`;

export const SearchIcon = styled.img`
width:23px;
height:23px;
`;

export const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color: white;
padding:10px;
border-radius:6px;
width:50%;
`;

export const SearchInput = styled.input`
border:none;
outline:none;
width:100%;
margin-left:15px;
font-size: 16px;
font-weight:bold;
`;

export const Container = styled.div`
display:flex;
flex-direction:column;
`;