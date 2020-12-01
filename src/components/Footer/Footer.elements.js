import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrap = styled.div`
    width: 100%;
    background-color: #242424;
`;

export const FooterContainer = styled.div`
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterDescription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;

    & > p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

export const FooterSubscriptionHeading = styled.p`
    
`;

export const FooterSubscriptionText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const InputAreas = styled.form`
    margin-bottom: 32px;
`;

export const FooterInput = styled.input`
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #b1b1b1;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1000px;

    @media screen and (max-width: 768px) {
        padding-top: 2rem;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border: box;
`;

export const LinksTitle = styled.h2`
    margin-bottom: 16px;
    color: #fff;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 8px;

    &:hover {
        color: #e9e9e9;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FooterLogo = styled.div`
    
`;

export const SocialLogoLink = styled(Link)`
    display: flex;
    justify-self: start;
    align-self: center;
    font-size: 2rem;
    margin-left: 20px;
    margin-bottom: 16px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`;

export const WebsiteRights = styled.small`
    margin-bottom: 16px;
    color: #fff;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled(Link)`
    font-size: 24px;
    color: #fff;
`;
