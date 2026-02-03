"use client";

import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "@/lib/constants";

export const Footer = () => {
    return (
        <SFooter>
            <SCopyright>&copy; 浄土宗 善福寺 All Rights Reserved.</SCopyright>
        </SFooter>
    );
};

const SFooter = styled.footer`
    background-color: ${COLORS.PRIMARY};
    color: white;
    padding: 30px 0;
    text-align: center;
    font-family: ${FONTS.MAIN};
`;

const SCopyright = styled.p`
    font-size: 14px;
    letter-spacing: 0.1em;
`;
