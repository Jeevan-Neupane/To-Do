import styled from "styled-components"
import { mobile } from "../../Styles/mediaQueries"
import { AiOutlineMenu } from "react-icons/ai"

export const MainDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color:${({ theme }) => theme.componentBackground};
padding:1rem 2rem;
position:relative;
`

export const RightDiv = styled.div`
display: flex;
align-items:center;
justify-content:center; 
gap:2rem;
`
export const LeftDiv = styled.div`

`
export const Logo = styled.h1`
font-size:3rem;



`
export const Lists = styled.ul`
display:flex;
gap:2rem;

${mobile({
    display: "none",
})} 

`
export const Links = styled.li`
font-size:1.6rem;
text-transform:uppercase;
font-weight: 500;
padding: 1rem;
cursor: pointer;
border-radius: 1rem;
&:hover{
    background-color:${({ theme }) => theme.hoverColor}; 
    

}

`

export const MobileLists = styled.ul`
position:absolute;
top: 5.5rem;
left:0;
display:flex;
align-items:center;
flex-direction:column;
width:100%;
background-color:${({ theme }) => theme.navColor};
padding-bottom: 2rem;

height:100vh;
padding-top: 40%;
transition: all 2s ease;




`
export const MobileLink = styled.li`
font-size:2rem;
margin-top: 2rem;



`

export const MenuIcons = styled(AiOutlineMenu)`
font-size:2.5rem;
cursor: pointer;
display:none;

${mobile({
    display: "block",
})} 

`