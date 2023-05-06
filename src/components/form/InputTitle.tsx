import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editTitleForm } from 'app/slices/formSlice';

//onBlur 이용 전역 저장

function InputTitle({ title }: { title: string }) {
    const dispatch = useDispatch();

    const [InputValue, setInputValue] = useState('제목 없는 설문지');
    const _onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const _onBlurInput = () => {
        // alert(title);
        dispatch(editTitleForm({ title: InputValue, description: InputValue }));
    };

    return (
        <StyledInput
            type="text"
            value={InputValue}
            onChange={_onChangeInput}
            onBlur={_onBlurInput}
        />
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
