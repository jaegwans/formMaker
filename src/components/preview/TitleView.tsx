import React, { useState } from 'react';
import styled from 'styled-components';

interface ITitle {
    title: string;
    description: string;
}

function Title({ title, description }: ITitle) {
    return (
        <StyledTitle>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </StyledTitle>
    );
}

export default Title;
const StyledTitle = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: wrap-content;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
