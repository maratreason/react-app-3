import React from "react";

import { Button } from "../../globalStyles";
import {
    FooterContainer,
    FooterDescription,
    FooterInput,
    FooterLink,
    FooterLinkItems,
    FooterLinks,
    FooterLinkWrapper,
    FooterLogo,
    FooterSubscriptionHeading,
    FooterSubscriptionText,
    InputAreas,
    LinksTitle,
    SocialLogoLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterWrap,
} from "./Footer.elements";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTypo3 } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterWrap>
            <FooterContainer>
                <FooterDescription>
                    <FooterSubscriptionHeading>
                        Подпишитесь на получение новых предложений
                    </FooterSubscriptionHeading>
                    <FooterSubscriptionText>Вы можете отписаться в любое время</FooterSubscriptionText>
                    <InputAreas>
                        <FooterInput type="email" name="email" placeholder="Your email" />
                        <Button>Подписаться</Button>
                    </InputAreas>
                </FooterDescription>
                <FooterLinks>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <LinksTitle>О компании</LinksTitle>
                            <FooterLink to="/signup">Лучшие туроператоры</FooterLink>
                            <FooterLink to="/">Доп. услуги</FooterLink>
                            <FooterLink to="/">Работа у нас</FooterLink>
                            <FooterLink to="/">Экономия денег</FooterLink>
                            <FooterLink to="/">Подробнее об услугах</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <LinksTitle>Контакты</LinksTitle>
                            <FooterLink to="/signup">Lorem, ipsum dolor.</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>

                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <LinksTitle>Lorem ipsum</LinksTitle>
                            <FooterLink to="/signup">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <LinksTitle>Lorem ipsum</LinksTitle>
                            <FooterLink to="/signup">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                            <FooterLink to="/">Lorem ipsum</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinks>
                <SocialMedia>
                    <SocialMediaWrap>
                        <FooterLogo>
                            <SocialLogoLink>
                                Logo
                            </SocialLogoLink>
                        </FooterLogo>
                        <WebsiteRights>Logo компании &copy; 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink to="/" target="_blank" aria-label="Facebook">
                                <FaFacebookF />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </FooterWrap>
    );
};

export default Footer;
