"use client";

import React, { useRef, MouseEventHandler } from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/lib/constants";

const sendMailApiUrl = "https://0cl8izsuwe.execute-api.ap-northeast-1.amazonaws.com/v1/send";

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const nameKanjiRef = useRef<HTMLInputElement>(null);
    const nameHuriganaRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const submitBtnToggle: MouseEventHandler = async (e) => {
        if (document.forms[0].reportValidity()) {
            e.preventDefault();
        } else {
            return;
        }

        if (!window.confirm("送信してよろしいですか？")) {
            return;
        }

        if (!formRef.current) throw Error("formRef is not assigned");
        if (!nameKanjiRef.current) throw Error("nameKanjiRef is not assigned");
        if (!nameHuriganaRef.current) throw Error("nameHuriganaRef is not assigned");
        if (!emailRef.current) throw Error("emailRef is not assigned");
        if (!subjectRef.current) throw Error("subjectRef is not assigned");
        if (!messageRef.current) throw Error("messageRef is not assigned");

        try {
            const res = await fetch(sendMailApiUrl, {
                method: "POST",
                body: JSON.stringify({
                    form: {
                        name_kanji: nameKanjiRef.current.value,
                        name_hurigana: nameHuriganaRef.current.value,
                        email: emailRef.current.value,
                        subject: subjectRef.current.value,
                        message: messageRef.current.value,
                    },
                }),
            });
            const resJson = await res.json();
            console.log(resJson);
            alert("お問い合わせを受け付けました。");
            formRef.current.reset();
        } catch (error) {
            console.error("送信エラー:", error);
            alert("送信に失敗しました。時間をおいて再度お試しください。");
        }
    };

    return (
        <SFormContainer>
            <SForm action="#" name="contactForm" ref={formRef}>
                <SFormGroup>
                    <SLabel>お名前（漢字）<SRequired>必須</SRequired></SLabel>
                    <SInput type="text" ref={nameKanjiRef} required />
                </SFormGroup>
                
                <SFormGroup>
                    <SLabel>お名前（フリガナ）<SRequired>必須</SRequired></SLabel>
                    <SInput type="text" ref={nameHuriganaRef} required />
                </SFormGroup>

                <SFormGroup>
                    <SLabel>メールアドレス<SRequired>必須</SRequired></SLabel>
                    <SInput type="email" ref={emailRef} required />
                </SFormGroup>

                <SFormGroup>
                    <SLabel>件名</SLabel>
                    <SInput type="text" ref={subjectRef} />
                </SFormGroup>

                <SFormGroup>
                    <SLabel>お問い合わせ内容<SRequired>必須</SRequired></SLabel>
                    <STextArea name="message" ref={messageRef} required />
                </SFormGroup>

                <SButtonContainer>
                    <p>ご入力内容をご確認の上、お間違いがなければ送信ボタンを押してください。</p>
                    <SCheckButton type="submit" onClick={submitBtnToggle}>
                        送信する
                    </SCheckButton>
                </SButtonContainer>
            </SForm>
        </SFormContainer>
    );
};

const SFormContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 40px auto;
    background-color: ${COLORS.LIGHT_GRAY};
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);

    @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
        padding: 20px;
    }
`;

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const SFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SLabel = styled.label`
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SRequired = styled.span`
    font-size: 11px;
    color: white;
    background-color: ${COLORS.ACCENT};
    padding: 2px 6px;
    border-radius: 4px;
`;

const SInput = styled.input`
    padding: 12px;
    border: 1px solid ${COLORS.BORDER};
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    &:focus {
        outline: 2px solid ${COLORS.PRIMARY};
        border-color: transparent;
    }
`;

const STextArea = styled.textarea`
    padding: 12px;
    border: 1px solid ${COLORS.BORDER};
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    min-height: 200px;
    resize: vertical;
    &:focus {
        outline: 2px solid ${COLORS.PRIMARY};
        border-color: transparent;
    }
`;

const SButtonContainer = styled.div`
    text-align: center;
    margin-top: 20px;

    p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const SCheckButton = styled.button`
    background-color: ${COLORS.SECONDARY};
    color: ${COLORS.TEXT};
    border: none;
    padding: 15px 60px;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
        background-color: #e5b914;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
`;
