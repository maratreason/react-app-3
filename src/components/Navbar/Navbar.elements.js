import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    max-width: 1300px;

    ${Container}
`;

export const NavbarLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    /* height: 80px; */
    &:hover {
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    width: 100%;
    font-size: 1.2rem;

    @media screen and (max-width: 960px) {
        display: table;
        width: 100%;
        text-align: center;
        padding: 2rem;

        &:hover {
            color: #4b59f7;
            transition: all 0.2s ease-out;
        }
    }
`;

export const NavItemBtn = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        height: 120px;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;
