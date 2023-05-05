import React, { useState } from 'react';
import styled from 'styled-components';
//onBlur 이용 전역 저장

function InputTitle() {
    const [InputValue, setInputValue] = useState('제목 없는 설문지');
    const _onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <StyledInput type="text" value={InputValue} onChange={_onChangeInput} />
    );
}

export default InputTitle;

const StyledInput = styled.input`
    width: 100%;
    height: 2rem;
    font-size: 2rem;
    transition: all 0.3s ease;
    border-bottom: 0.125rem solid ${({ theme }) => theme.color.gray};
    margin: 0.625rem 0;

    :focus {
        border-bottom: 0.125rem solid ${({ theme }) => theme.color.deeppurple};
    }
`;
