import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
    Nav,
    NavbarContainer,
    NavbarLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to="/" onClick={closeMobileMenu}>
                        Logo
                    </NavbarLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Главная</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Услуги</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products">Туры</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/signup">
                                    <Button>Зарегистрироваться</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/signup">
                                    <Button fontBig>Зарегистрироваться</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
