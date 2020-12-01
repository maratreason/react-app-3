import styled from "styled-components";
import { Container } from "../../globalStyles";

export const HeroContainer = styled(Container)`
    background: url("images/img-home.jpg") center center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    object-fit: contain;

    ${Container}
`;

export const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
`;

export const HeroSectionTitle = styled.h1`
    font-size: 100px;
    color: #fff;
    margin-top: -100px;

    @media screen and (max-width: 960px) {
        font-size: 70px;
        margin-top: -150px;
    }

    @media screen and (max-width: 768px) {
        font-size: 50px;
        margin-top: -100px;
    }
`;

export const HeroSectionSubtitle = styled.p`
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
        sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const HeroButtons = styled.div`
    margin-top: 32px;

    & > Button {
        margin: 6px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
