import React, { useState } from 'react';
import styled from 'styled-components';
import InputTitle from './form/InputTitle';
import InputSub from './form/InputSub';

interface ITitle {
    title: string;
    description: string;
}

function Title({ title, description }: ITitle) {
    return (
        <StyledTitle>
            <InputTitle title={title} />
            <InputSub description={description} />
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
