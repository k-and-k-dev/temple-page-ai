"use client";

import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <SMain>
            <Header />
            <SPageHeader>
                <STitle>当山について</STitle>
                <SSubTitle>About Us</SSubTitle>
            </SPageHeader>
            <SContainer>
                <SSection>
                    <SSectionBody>
                        <SImage src="/images/mainHall.webp" alt="本堂" />
                        <STextContent>
                            <SH3>最譽貞庵上人による開基</SH3>
                            <P>
                                善福寺は、天正18年（1590年）に創建されました。
                                当山は、長い歴史の中で地域の皆様とともに歩んでまいりました。
                                四季折々の美しい自然に囲まれ、心静かに過ごせる空間を提供しております。
                            </P>
                        </STextContent>
                    </SSectionBody>
                </SSection>

                 <SSection>
                    <SSectionBody $reverse>
                        <SImage src="/images/bellTower.webp" alt="鐘楼" />
                        <STextContent>
                            <SH3>鐘楼と境内の風景</SH3>
                            <P>
                                境内には歴史ある鐘楼があり、夕暮れ時には鐘の音が響き渡ります。
                                春には桜、夏には新緑、秋には紅葉と、季節の移ろいを感じながら、
                                故人を想い、自身を見つめ直す時間をお過ごしいただけます。
                            </P>
                        </STextContent>
                    </SSectionBody>
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
    padding-top: 80px;
`;

const SPageHeader = styled.div`
    background-color: ${COLORS.PRIMARY};
    color: white;
    padding: 60px 0;
    text-align: center;
`;

const STitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
    letter-spacing: 0.1em;
`;

const SSubTitle = styled.p`
    font-family: sans-serif;
    letter-spacing: 0.2em;
    opacity: 0.8;
`;

const SContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 20px;
    width: 100%;
`;

const SSection = styled.section`
    margin-bottom: 100px;
`;

const SSectionBody = styled.div<{ $reverse?: boolean }>`
    display: flex;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    align-items: center;
    gap: 60px;

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        flex-direction: column;
        gap: 30px;
    }
`;

const SImage = styled.img`
    width: 50%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 100%;
    }
`;

const STextContent = styled.div`
    width: 50%;
    
    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        width: 100%;
    }
`;

const SH3 = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${COLORS.PRIMARY};
    border-left: 4px solid ${COLORS.SECONDARY};
    padding-left: 15px;
`;

const P = styled.p`
    line-height: 2;
    margin-bottom: 20px;
    text-align: justify;
`;
