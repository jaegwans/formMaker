import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

interface IInterAnswer {
    type: '객관식 질문' | '체크박스' | '드롭다운';
    generalProps: any;
    setGeneralProps: any;
}

function InterAnserItemIcon({ type, id }: any) {
    return type === '객관식 질문' ? (
        <RadioButtonCheckedIcon />
    ) : type === '체크박스' ? (
        <CheckBoxIcon />
    ) : (
        <div>{++id}.</div>
    );
}

function InterAnswerItem({
    type,
    generalProps,
    setGeneralProps,
    value,
    id,
    keyid,
}: any) {
    useEffect(() => {
        setInputValue(value);
    }, [value]);
    const [inputValue, setInputValue] = useState<string>(value);

    const _onClickDelete = () => {
        const updatedAnswerItem = generalProps.answer.filter(
            (user: any) => user.id !== id
        );
        setGeneralProps({
            ...generalProps,
            answer: [...updatedAnswerItem],
        });
    };
    useEffect(() => {
        const updatedAnswerItem = generalProps.answer.map((user: any) => {
            if (user.id === id) {
                return { id: id, value: inputValue };
            } else {
                return user;
            }
        });
        setGeneralProps({
            ...generalProps,
            answer: [...updatedAnswerItem],
        });
    }, [inputValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <StyledInterAnswerItem>
            <InterAnserItemIcon type={type} id={keyid} />
            <StyledInput
                placeholder="질문"
                onChange={handleChange}
                name="answer"
                value={inputValue}
            />
            <StyledDelete onClick={_onClickDelete}>
                <DeleteIcon />
            </StyledDelete>
        </StyledInterAnswerItem>
    );
}

function InterAnswer({ type, generalProps, setGeneralProps }: IInterAnswer) {
    const [id, setId] = useState(1);
    const _onClickCreateInput = () => {
        setId(id + 1);
        setGeneralProps({
            ...generalProps,
            answer: [...generalProps.answer, { id: id, value: '' }],
        });
    };

    return (
        <>
            {generalProps.answer.map((user: any, index: number) => (
                <InterAnswerItem
                    type={type}
                    generalProps={generalProps}
                    setGeneralProps={setGeneralProps}
                    id={user.id}
                    value={user.value}
                    key={index}
                    keyid={index}
                />
            ))}

            <StyledCreateInput onClick={_onClickCreateInput}>
                옵션 추가
            </StyledCreateInput>
        </>
    );
}

export default InterAnswer;
const StyledDelete = styled.div`
    cursor: pointer;
`;
const StyledInterAnswerItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.625rem 0;
`;
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

const StyledCreateInput = styled.div`
    cursor: pointer;
`;
