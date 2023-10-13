import styled from "styled-components"
import { FixedWidthContainer } from "../Styles/containers"

export const OuterDiv = styled(FixedWidthContainer)`
 margin-top: 3rem;
 background-color:${({ theme }) => theme.componentBackground};
 
`