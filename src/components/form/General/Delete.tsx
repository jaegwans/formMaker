import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteGeneralForm } from 'app/slices/formSlice';

function Delete({ id }: { id: number }) {
    const dispatch = useDispatch();
    const _onClickDelete = () => {
        dispatch(deleteGeneralForm({ id: id }));
    };
    return <StyledDelete onClick={_onClickDelete}>삭제</StyledDelete>;
}

export default Delete;

const StyledDelete = styled.div`
    cursor: pointer;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
