import { css } from "styled-components";

export const mobile = (props) => {
    return css`
    @media (max-width:650px ) {
        ${props}
        
    }`
}
export const smallMobile = (props) => {
    return css`
    @media (max-width:384px ) {
        ${props}
        
    }`
}