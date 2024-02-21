import styled from 'styled-components';

export const RecipeListContainer = styled.div`
display:flex;
flex:direction:row;
flex-wrap:wrap;
padding:30px;
justify-content:space-evenly;
gap:20px;
`;

export const RecipeContainer = styled.div`
  dissplay:flex;
  flex-direction:column;
  padding:10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width:300px;
  border-radius:10px;
`;

export const CoverImage = styled.img`
height:200px;
margin:0 17%;
`;

export const RecipeName = styled.p`
font-size:18px;
font-weight:bold;
color:black;
margin: 10px 0;
`;

export const IngredientsText = styled.p`
font-size:18px;
border: 1px solid green;
color:black;
cursor:pointer;
padding: 10px 15px;
border-radius:4px;
color:green;
text-align:center;
font-weight:500;
margin-bottom:12px;
&:hover {
  background-color: lightgreen; 
}
`;



export const SeeMoreText = styled(IngredientsText)`
color:red;
border: 1px solid red;
&:hover {
  background-color: #FFCCCB; 
}
`;