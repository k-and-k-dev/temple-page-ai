"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { COLORS, BREAKPOINTS, FONTS } from "@/lib/constants";

const navList = [
    { link: "/", label: "ホーム" },
    { link: "/information", label: "お知らせ" },
    { link: "/about", label: "当山について" },
    { link: "/contact", label: "お問い合わせ" },
];

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <SHeader>
            <SHeaderInner>
                <SLogoContainer>
                    <Link href="/" onClick={closeMenu}>
                        <SLogoImage src="/images/logo.png" alt="浄土宗善福寺" />
                    </Link>
                    <SLogoTextGroup>
                        <SLogoTextDenomination>浄土宗</SLogoTextDenomination>
                        <SLogoTextTemple>善福寺</SLogoTextTemple>
                    </SLogoTextGroup>
                </SLogoContainer>

                <SNav $isActive={menuActive}>
                    <SNavList>
                        {navList.map((item) => (
                            <SNavItem key={item.link}>
                                <Link href={item.link} onClick={closeMenu}>
                                    {item.label}
                                </Link>
                            </SNavItem>
                        ))}
                    </SNavList>
                </SNav>

                <SHamburgerButton onClick={toggleMenu} aria-label="Menu" $isActive={menuActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </SHamburgerButton>
            </SHeaderInner>
        </SHeader>
    );
};

const SHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
    transition: all 0.3s ease;
`;

const SHeaderInner = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        padding: 0 20px;
    }
`;

const SLogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const SLogoImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`;

const SLogoTextGroup = styled.div`
    display: flex;
    align-items: baseline;
    font-family: ${FONTS.MAIN};
    color: ${COLORS.TEXT};
`;

const SLogoTextDenomination = styled.span`
    font-size: 14px;
    margin-right: 8px;
    letter-spacing: 0.1em;
`;

const SLogoTextTemple = styled.span`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.2em;
`;

const SNav = styled.nav<{ $isActive: boolean }>`
    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        position: fixed;
        top: 0;
        right: ${({ $isActive }) => ($isActive ? "0" : "-100%")};
        width: 100%;
        height: 100vh;
        background-color: ${COLORS.PRIMARY};
        transition: right 0.3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const SNavList = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

const SNavItem = styled.li`
    a {
        color: ${COLORS.TEXT};
        text-decoration: none;
        font-family: ${FONTS.MAIN};
        font-size: 16px;
        letter-spacing: 0.1em;
        transition: color 0.3s ease;

        &:hover {
            color: ${COLORS.PRIMARY};
        }

        @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
            color: white;
            font-size: 20px;
            
            &:hover {
                color: ${COLORS.SECONDARY};
            }
        }
    }
`;

const SHamburgerButton = styled.button<{ $isActive: boolean }>`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 1001;

    span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ $isActive }) => ($isActive ? "white" : COLORS.PRIMARY)};
        position: absolute;
        transition: all 0.3s ease;

        &:nth-child(1) {
            top: ${({ $isActive }) => ($isActive ? "9px" : "0")};
            transform: ${({ $isActive }) => ($isActive ? "rotate(45deg)" : "none")};
        }
        &:nth-child(2) {
            top: 9px;
            opacity: ${({ $isActive }) => ($isActive ? "0" : "1")};
        }
        &:nth-child(3) {
            top: ${({ $isActive }) => ($isActive ? "9px" : "18px")};
            transform: ${({ $isActive }) => ($isActive ? "rotate(-45deg)" : "none")};
        }
    }

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        display: block;
    }
`;
