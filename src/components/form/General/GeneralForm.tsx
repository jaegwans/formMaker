import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Selector from '../Selector';
import Delete from './Delete';
import Copy from './Copy';
import { useDispatch, useSelector } from 'react-redux';
import { editGeneralForm } from 'app/slices/formSlice';
import { RootState } from 'app/store';
import { Switch } from '@mui/material';
import TextAnswer from './TextAnswer';
import InterAnswer from './InterAnswer';

interface IGeneralForm {
    id: number;
    type: '단답형' | '장문형' | '객관식 질문' | '체크박스' | '드롭다운';
    question: string;
    answer?: [];
    essential?: boolean;
}

function GeneralForm({ type, question, id, essential, answer }: IGeneralForm) {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     setGeneralProps({ id: id, type: type, question: question });
    // }, []);

    const [generalProps, setGeneralProps] = useState<IGeneralForm>({
        id: id,
        type: type,
        question: question,
        essential: essential,
        answer: answer,
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        setGeneralProps({
            ...generalProps,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralProps({
            ...generalProps,
            [e.target.name]: e.target.checked,
        });
    };

    const handleBlur = () => {
        dispatch(
            editGeneralForm({
                id: generalProps.id,
                question: generalProps.question,
                type: generalProps.type,
                essential: generalProps.essential,
                answer: generalProps.answer,
            })
        );
    };
    return (
        <StyledGeneral onBlur={handleBlur}>
            <div className="InputAndSelector">
                <StyledInput
                    placeholder="질문"
                    onChange={handleChange}
                    name="question"
                    value={generalProps.question}
                />
                <Selector
                    name="type"
                    onChange={handleChange}
                    value={generalProps.type}
                />
            </div>
            <div>
                {generalProps.type === '단답형' ||
                generalProps.type === '장문형' ? (
                    <TextAnswer type={generalProps.type} />
                ) : (
                    <InterAnswer
                        type={generalProps.type}
                        generalProps={generalProps}
                        setGeneralProps={setGeneralProps}
                    />
                )}
            </div>

            <div className="CopyAndDelete">
                <Delete id={generalProps.id} />
                <Copy props={generalProps} />
                <label className="switch">
                    <Switch
                        checked={generalProps.essential}
                        name="essential"
                        onChange={handleChangeSwitch}
                    />
                    필수
                </label>
            </div>
        </StyledGeneral>
    );
}

export default GeneralForm;

const StyledGeneral = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: wrap-content;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    .CopyAndDelete {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .InputAndSelector {
        display: flex;
        flex-direction: row;
        .switch {
            margin-left: 100px;
        }
    }
`;
const StyledInput = styled.input`
    width: 70%;
    height: 2rem;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border-bottom: 0.125rem solid ${({ theme }) => theme.color.gray};
    margin: 0.625rem 0;

    :focus {
        border-bottom: 0.125rem solid ${({ theme }) => theme.color.deeppurple};
        background-color: ${({ theme }) => theme.color.whitegray};
    }
`;
