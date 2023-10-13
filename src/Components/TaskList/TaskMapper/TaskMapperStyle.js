import styled from "styled-components";

export const TaskBox = styled.div`
display:flex;
align-items:center;
gap:2rem;

margin-bottom: 2rem;
background-color: ${({ theme }) => theme.backGround};
padding:1rem;
`

export const TaskName = styled.h3`
font-size:2rem;
color:${({ iscompleted, theme }) => {
        if (iscompleted === "yes") {
            return "#379237"
        } else {
            return "#C70A80"
        }
    }};
    flex: 1;

`

export const Checkbox = styled.input`
font-size:2rem;
`
export const IconsBox = styled.div`
font-size:2rem;
cursor: pointer;
display:flex;
gap:2rem;

`