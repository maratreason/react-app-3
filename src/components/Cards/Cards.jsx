import React from "react";
import {
    CardsMain,
    CardContainer,
    CardItems,
    CardWrapper,
    CardTitle
} from "./Cards.elements";
import image from "../../images/img-9.jpg";
import image2 from "../../images/img-2.jpg";
import image3 from "../../images/img-3.jpg";
import image4 from "../../images/img-4.jpg";
import CardItem from "./CardItem/CardItem";

const Cards = () => {
    return (
        <CardsMain>
            <CardTitle>Выберите для себя тур</CardTitle>
            <CardContainer>
                <CardWrapper>
                    <CardItems>
                        <CardItem
                            src={image}
                            text="Путешествие по девственным джунглям Вьетнама"
                            label="Туристический Поход"
                            alt="travel Image"
                            path="/services"
                        />
                        <CardItem
                            src={image2}
                            text="Незабываемый Отдых на Гавайских островах. США"
                            label="Отдых люкс"
                            alt="travel Image"
                            path="/services"
                        />
                    </CardItems>

                    <CardItems>
                        <CardItem
                            src={image3}
                            text="Кругосветное путешествие на веслах"
                            label="Туристический Поход"
                            alt="travel Image"
                            path="/services"
                        />
                        <CardItem
                            src={image4}
                            text="Игра в футбол на острове"
                            label="Отдых люкс"
                            alt="travel Image"
                            path="/services"
                        />
                    </CardItems>
                </CardWrapper>
            </CardContainer>
        </CardsMain>
    );
};

export default Cards;
