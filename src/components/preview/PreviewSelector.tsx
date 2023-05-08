import React, { useState } from 'react';
import styled from 'styled-components';
// import { type } from '../../styles/Theme/theme';

interface IGeneralForm {
    id: number;
    type: '단답형' | '장문형' | '객관식 질문' | '체크박스' | '드롭다운';
    question: string;
    answer: any;
    essential?: boolean;
    setRes?: any;
    res: any;
}

function PreviewSelector({
    type,
    question,
    id,
    essential,
    answer,
    setRes,
    res,
}: IGeneralForm) {
    const [resValue, setResValue] = useState<any>();
    const handleChangeText = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setResValue(e.target.value);
    };
    const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResValue(e.target.value);
    };

    const handleBlur = () => {
        const copyRes = res === undefined ? [] : [...res];
        copyRes[id - 1] = { question: question, response: resValue };
        setRes(copyRes);
    };

    if (type === '단답형')
        return (
            <div onBlur={handleBlur}>
                <h2>Q:{question}</h2>
                <StyledInput
                    placeholder="답변"
                    value={resValue}
                    onChange={handleChangeText}
                />
            </div>
        );
    if (type === '장문형')
        return (
            <div onBlur={handleBlur}>
                <h2>Q:{question}</h2>
                <StyledTextarea
                    placeholder="답변"
                    value={resValue}
                    onChange={handleChangeText}
                />
            </div>
        );
    if (type === '객관식 질문')
        return (
            <div onBlur={handleBlur}>
                <h2>Q:{question}</h2>
                {JSON.stringify(answer)}
                {answer?.map((item: any, key: any) => {
                    return (
                        <div>
                            <StyledInputList
                                type="radio"
                                name="res"
                                onChange={handleChangeRadio}
                                value={item.value}
                                key={key}
                            />
                            {item.value as string}
                        </div>
                    );
                })}
            </div>
        );
    if (type === '체크박스')
        return (
            <div onBlur={handleBlur}>
                <h2>Q:{question}</h2>
                {JSON.stringify(answer)}
                {answer?.map((item: any, key: any) => {
                    return (
                        <div>
                            <StyledInputList
                                type="checkbox"
                                name="res"
                                onChange={handleChangeRadio}
                                value={item.value}
                                key={key}
                            />
                            {item.value as string}
                        </div>
                    );
                })}
            </div>
        );
    if (type === '드롭다운')
        return (
            <div>
                <h2>Q:{question}</h2>
            </div>
        );
    else return <div>error</div>;
}

export default PreviewSelector;

const StyledInputList = styled.input`
    all: revert;
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

const StyledTextarea = styled.textarea`
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    border-bottom: 0.125rem solid ${({ theme }) => theme.color.gray};
    margin: 0.625rem 0;

    :focus {
        border-bottom: 0.125rem solid ${({ theme }) => theme.color.deeppurple};
    }
`;
