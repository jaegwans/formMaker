import React from 'react';
import styled from 'styled-components';

interface ISelector {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    name?: string;
}
function Selector({ onChange, value, name }: ISelector) {
    return (
        <StyledSelect onChange={onChange} value={value} name={name}>
            <option value="단답형">단답형</option>
            <option value="장문형">장문형</option>
            <option value="객관식 질문">객관식 질문</option>
            <option value="체크박스">체크박스</option>
            <option value="드롭다운">드롭다운</option>
        </StyledSelect>
    );
}

export default Selector;

const StyledSelect = styled.select`
    width: 30%;
    font-size: 1.1rem;
    height: 2rem;
    margin: 0.625rem 0;
    border-color: ${({ theme }) => theme.color.gray};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
