import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from '../Selector';
import Delete from './Delete';
import Copy from './Copy';
import { useDispatch } from 'react-redux';
import { editGeneralForm } from 'app/slices/formSlice';

interface IGeneralForm {
    id: number;
    type: string;
    question: string;
    answer?: string;
}

function GeneralForm({ type, question, id }: IGeneralForm) {
    const dispatch = useDispatch();
    const [generalProps, setGeneralProps] = useState<IGeneralForm>({
        id: id,
        type: type,
        question: question,
    });
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGeneralProps({ ...generalProps, type: e.target.value });
    };
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralProps({ ...generalProps, question: e.target.value });
    };
    const handleBlur = () => {
        dispatch(
            editGeneralForm({
                id: generalProps.id,
                question: generalProps.question,
                type: generalProps.type,
            })
        );
    };
    return (
        <StyledGeneral onBlur={handleBlur}>
            <div className="InputAndSelector">
                <StyledInput
                    placeholder="질문"
                    onChange={handleChangeInput}
                    value={generalProps.question}
                />
                <Selector
                    onChange={handleChangeSelect}
                    value={generalProps.type}
                />
            </div>
            <div className="CopyAndDelete">
                {generalProps.id}
                <Delete id={generalProps.id} />
                <Copy id={generalProps.id} />
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
