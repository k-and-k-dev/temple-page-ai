"use client";

import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <SMain>
            <Header />
            <SPageHeader>
                <STitle>お問い合わせ</STitle>
                <SSubTitle>Contact</SSubTitle>
            </SPageHeader>
            <SContainer>
                <SDescription>
                    葬儀、法要、その他お問い合わせにつきましては、
                    <br />
                    下記の通りお電話かメールにてご連絡下さい。
                </SDescription>

                <STelSection>
                    <STelTitle>お電話でのお問い合わせ</STelTitle>
                    <STelNumber href="tel:047-488-5809">047-488-5809</STelNumber>
                </STelSection>

                <SMailSection>
                    <STelTitle>メールでのお問い合わせ</STelTitle>
                    <SDescription>
                        下記専用フォームにて必要事項を入力後、送信ボタンを押して下さい。
                        <br />
                        数日中にご回答差し上げますが、万が一返信のない場合には再度送信いただくか、お電話にてご連絡ください。
                    </SDescription>
                    <ContactForm />
                </SMailSection>
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
    padding: 60px 20px;
    width: 100%;
    text-align: center;
`;

const SDescription = styled.p`
    line-height: 2;
    margin-bottom: 40px;
`;

const STelSection = styled.div`
    margin-bottom: 60px;
    padding: 40px;
    background-color: white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

const STelTitle = styled.h2`
    font-size: 1.5rem;
    color: ${COLORS.PRIMARY};
    margin-bottom: 20px;
    position: relative;
    display: inline-block;

    &::after {
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background-color: ${COLORS.SECONDARY};
        margin: 10px auto 0;
    }
`;

const STelNumber = styled.a`
    font-size: 2.5rem;
    color: ${COLORS.TEXT};
    font-weight: bold;
    font-family: sans-serif;
    
    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        font-size: 1.8rem;
    }
`;

const SMailSection = styled.div`
    width: 100%;
`;
