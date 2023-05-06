import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { copyGeneralForm, editGeneralForm } from 'app/slices/formSlice';

function Copy({ props }: any) {
    const dispatch = useDispatch();
    const _onClickCopy = () => {
        // dispatch(
        //     editGeneralForm({
        //         id: props.id,
        //         question: props.question,
        //         type: props.type,
        //     })
        // );
        dispatch(copyGeneralForm({ id: props.id }));
    };
    return <StyledCopy onClick={_onClickCopy}>복사</StyledCopy>;
}

export default Copy;

const StyledCopy = styled.div`
    cursor: pointer;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
