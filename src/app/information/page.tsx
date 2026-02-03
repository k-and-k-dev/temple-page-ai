"use client";

import React from "react";

import styled from "styled-components";
import { COLORS } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { INFORMATION_LIST } from "@/lib/data";

export default function InformationPage() {
    return (
        <SMain>
            <Header />
            <SPageHeader>
                <STitle>お知らせ</STitle>
                <SSubTitle>Information</SSubTitle>
            </SPageHeader>
            <SContainer>
                <SInfoList>
                    {INFORMATION_LIST.map((item, index) => {
                        const [date, ...titleParts] = item.title.split(" ");
                        const title = titleParts.join(" ");
                        return (
                            <SInfoItem key={index}>
                                <SInfoDate>{date}</SInfoDate>
                                <SInfoTitle>{title}</SInfoTitle>
                                <SInfoContent>
                                    {item.body.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </SInfoContent>
                            </SInfoItem>
                        );
                    })}
                </SInfoList>
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
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px;
    width: 100%;
`;

const SInfoList = styled.ul`
    list-style: none;
`;

const SInfoItem = styled.li`
    margin-bottom: 60px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
`;

const SInfoDate = styled.p`
    color: #888;
    margin-bottom: 10px;
    font-family: sans-serif;
`;

const SInfoTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${COLORS.TEXT};
`;

const SInfoContent = styled.p`
    line-height: 1.8;
`;
