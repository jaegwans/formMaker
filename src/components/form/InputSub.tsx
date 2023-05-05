import React, { useState } from 'react';
import styled from 'styled-components';

function InputTitle() {
    const [InputValue, setInputValue] = useState('');
    const _onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <StyledInput
            type="text"
            value={InputValue}
            placeholder="설문지 설명"
            onChange={_onChangeInput}
        />
    );
}

export default InputTitle;

const StyledInput = styled.input`
    width: 100%;
    height: 1rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    border-bottom: 0.125rem solid ${({ theme }) => theme.color.gray};
    margin: 0.625rem 0;

    :focus {
        border-bottom: 0.125rem solid ${({ theme }) => theme.color.deeppurple};
    }
`;
