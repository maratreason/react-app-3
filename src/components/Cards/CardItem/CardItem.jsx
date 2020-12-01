import React from "react";
import { Card, CardImage, CardItemInfo, CardItemLink, CardItemPicWrap, CardItemText } from "./CardItem.elements";

const CardItem = ({ path, label, src, text }) => {
    return (
        <Card>
            <CardItemLink to={path}>
                <CardItemPicWrap data-category={label}>
                    <CardImage src={src} alt="Travel Image" />
                </CardItemPicWrap>
                <CardItemInfo>
                    <CardItemText>{ text }</CardItemText>
                </CardItemInfo>
            </CardItemLink>
        </Card>
    );
};

export default CardItem;
