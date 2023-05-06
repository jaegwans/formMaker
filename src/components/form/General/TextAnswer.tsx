import React from 'react';
import styled from 'styled-components';

type type = '단답형' | '장문형';

function TextAnswer({ type }: { type: type }) {
    return type === '단답형' ? (
        <StyledTextAnswer type={type}>
            <div>단답형 텍스트</div>
        </StyledTextAnswer>
    ) : (
        <StyledTextAnswer type={type}>
            <div>장문형 텍스트</div>
        </StyledTextAnswer>
    );
}

export default TextAnswer;

const StyledTextAnswer = styled.div<{ type: type }>`
    color: ${({ theme }) => theme.color.deepgray};
    position: relative;
    bottom: 0px;
    font-size: 1rem;
    height: 1.5rem;
    display: flex;
    align-items: flex-end;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray};
    width: ${({ type }) => (type === '단답형' ? '50%' : '100%')};
`;
