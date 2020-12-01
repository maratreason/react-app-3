import styled from "styled-components";
import { Container } from "../../globalStyles";

export const CardsMain = styled.div`
    padding: 4rem;
    background: #fff;
`;

export const CardTitle = styled.h1`
    text-align: center;
`;

export const CardContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 1200px) {
        width: 84%;
    }
`;

export const CardWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`;

export const CardItems = styled.ul`
    margin-bottom: 24px;

    @media only screen and (min-width: 1024px) {
        display: flex;
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 2rem;
    }
`;

export const CardItem = styled.li`
    padding: 4rem;
    background: #fff;
    display: flex;
    width: 100%;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
`;
