import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Source Sans Pro", sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 2px;
    background: ${({ primary }) => (primary ? "#0467F8" : "transparent")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "8px 20px")};
    color: ${({ primary }) => (primary ? "#0467F8" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: ${({ primary }) => (primary ? "none" : "1px solid #fff")};
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #242424;
        transition: all 0.3s ease-out;
    }

    & > i {
        margin-left: 4px;
        position: relative;
        top: 3px;
    }

    &.outline {
        background: transparent;
        color: #fff;
        padding: 8px 20px;
        border: 1px solid #fff;
        transition: all 0.3s ease-out;
    }

    &.medium {
        padding: 8px 20px;
        font-size: 20px;
    }

    &.large {
        padding: 12px 26px;
        font-size: 20px;
    }

    &.medium:hover,
    &.large:hover {
        background: #fff;
        color: #242424;
        transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export default GlobalStyle;