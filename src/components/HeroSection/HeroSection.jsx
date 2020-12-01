import React from "react";
import { Button } from "../../globalStyles";
import {
    HeroContainer,
    HeroSectionSubtitle,
    HeroSectionTitle,
    Video,
    HeroButtons
} from "./HeroSection.elements";
import { AiFillCaretRight } from "react-icons/ai";
import video from "../../videos/video-1.mp4";

const HeroSection = () => {
    return (
        <>
            <Video src={video} autoPlay loop muted />
            <HeroContainer>
                <HeroSectionTitle>Путешествия</HeroSectionTitle>
                <HeroSectionSubtitle>Не откладывайте отдых</HeroSectionSubtitle>
                <HeroButtons>
                    <Button>Заказать тур</Button>
                    <Button>Смотреть видео<i><AiFillCaretRight /></i></Button>
                </HeroButtons>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
