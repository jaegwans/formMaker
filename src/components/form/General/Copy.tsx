import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { copyGeneralForm } from 'app/slices/formSlice';

function Copy({ id }: { id: number }) {
    const dispatch = useDispatch();
    const _onClickDelete = () => {
        dispatch(copyGeneralForm({ id: id }));
    };
    return <StyledCopy onClick={_onClickDelete}>복사</StyledCopy>;
}

export default Copy;

const StyledCopy = styled.div`
    cursor: pointer;
    margin: 0 0.5rem;
`;
