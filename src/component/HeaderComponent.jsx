import styled from 'styled-components';

const Header = styled.div`
color:white;
background-color:#12372A;
display:flex;
justify-content:space-between;
flex:direction:row;
padding:20px;
font-size: 25px;
font-weight:bold;
box-shadow:0 3px 6px #555;
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
background-color: #E3E1D9;
padding:10px;
border-radius:6px;
width:50%;
`;

const SearchInput = styled.input`
border:none;
outline:none;
width:100%;
background-color: #E3E1D9;
margin-left:15px;
font-size: 16px;
font-weight:bold;
`;

const Container = styled.div`
display:flex;
flex-direction:column;
`;

export default { Header, AppNameComponent, AppIcon, SearchIcon, SearchComponent, SearchInput, Container };