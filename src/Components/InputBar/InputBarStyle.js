import styled from "styled-components"


export const MainDiv = styled.form`
text-align:center;
width:80%;
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;

`
export const TaskInput = styled.input`
font-size:1.6rem;
padding: 0.5rem 1rem;
background-color:${({ theme }) => theme.backGround};
color:${({ theme }) => theme.primaryText} ;
outline:none;
border:1px solid ${({ theme }) => theme.primaryText} ;
border:1px solid ${({ theme }) => theme.primaryText} ;
flex: 1;

`
export const AddButton = styled.button`
font-size:1.6rem;
padding: 0.5rem 1rem;
margin-left: 1rem;

border:1px solid ${({ theme }) => theme.primaryText} ;
outline:none;
cursor: pointer;
background-color:${({ theme }) => theme.backGround};
color:${({ theme }) => theme.primaryText} ;


&:hover{
    background-color:${({ theme }) => theme.hoverColor};
    


}
`


