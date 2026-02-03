"use client";

import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS, FONTS } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { INFORMATION_LIST } from "@/lib/data";

export default function Home() {
    return (
        <SMain>
            <Header />
            <SHero>
                <SHeroImage src="/images/main.webp" alt="善福寺 本堂" />
                <SHeroOverlay>
                    <SHeroTitle>
                        心安らぐ、
                        <br />
                        浄土の教え。
                    </SHeroTitle>
                    <SHeroSubtitle>千葉県八千代市にある浄土宗のお寺、善福寺。</SHeroSubtitle>
                </SHeroOverlay>
            </SHero>

            <SContainer>
                <SSection>
                    <SSectionTitle>お知らせ</SSectionTitle>
                    <SInfoList>
                        {INFORMATION_LIST.slice(0, 4).map((item, index) => {
                             const [date, ...titleParts] = item.title.split(" ");
                             const title = titleParts.join(" ");
                             return (
                                <SInfoItem key={index}>
                                    <SInfoDate>{date}</SInfoDate>
                                    <SInfoText>{title}</SInfoText>
                                </SInfoItem>
                             );
                        })}
                    </SInfoList>
                    <SLinkButton href="/information">お知らせ一覧へ</SLinkButton>
                </SSection>

                <SSection>
                    <SSectionTitle>当山について</SSectionTitle>
                    <SContentText>
                        善福寺は、天正18年（1590年）に創建された浄土宗の寺院です。
                        <br />
                        四季折々の自然に囲まれ、静寂な時が流れる境内で、
                        <br />
                        先祖を敬い、心静かに手を合わせる場所です。
                    </SContentText>
                    <SButton href="/about">詳しく見る</SButton>
                </SSection>
            </SContainer>
            <Footer />
        </SMain>
    );
}

const SMain = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const SHero = styled.section`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    margin-top: 80px; /* Header height */
`;

const SHeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
`;

const SHeroOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 90%;
`;

const SHeroTitle = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: ${FONTS.MAIN};
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    line-height: 1.4;

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 2.5rem;
    }
`;

const SHeroSubtitle = styled.p`
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1rem;
    }
`;

const SContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 20px;
    width: 100%;
`;

const SSection = styled.section`
    margin-bottom: 100px;
    text-align: center;
`;

const SSectionTitle = styled.h2`
    font-size: 2rem;
    color: ${COLORS.PRIMARY};
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    letter-spacing: 0.1em;

    &::after {
        content: "";
        display: block;
        width: 60px;
        height: 2px;
        background-color: ${COLORS.SECONDARY};
        margin: 15px auto 0;
    }
`;

const SInfoList = styled.ul`
    list-style: none;
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
`;

const SInfoItem = styled.li`
    border-bottom: 1px solid ${COLORS.BORDER};
    padding: 20px 0;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`;

const SInfoDate = styled.span`
    font-family: "Helvetica Neue", Arial, sans-serif;
    color: #666;
    margin-right: 30px;
    min-width: 100px;
`;

const SInfoText = styled.span`
    color: ${COLORS.TEXT};
`;

const SContentText = styled.p`
    font-size: 1.1rem;
    line-height: 2;
    margin-bottom: 40px;
    white-space: pre-wrap;

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1rem;
        br {
            display: none;
        }
    }
`;

const SButton = styled.a`
    display: inline-block;
    padding: 15px 50px;
    background-color: ${COLORS.SECONDARY};
    color: ${COLORS.TEXT};
    border-radius: 50px;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #e5b914; /* Slightly darker gold */
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }
`;

const SLinkButton = styled.a`
    display: inline-block;
    margin-top: 30px;
    color: ${COLORS.PRIMARY};
    text-decoration: underline;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;
    
    &:hover {
        opacity: 0.7;
    }
`;
