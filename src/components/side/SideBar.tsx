import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addGeneralForm } from 'app/slices/formSlice';
import { Link } from 'react-router-dom';

function SideBar() {
    const dispatch = useDispatch();
    const _onClickSideBar = () => {
        dispatch(addGeneralForm());
    };

    return (
        <>
            <StyledSideBar onClick={_onClickSideBar}>추가</StyledSideBar>;
            <Link to={'/preview'}>
                <StyledSidePreview>
                    <div>미리보기</div>
                </StyledSidePreview>
            </Link>
            ;
        </>
    );
}

export default SideBar;

const StyledSideBar = styled.div`
    width: 3.25rem;
    height: 3.25rem;
    position: fixed;
    right: 3rem;
    top: 10%;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.color.deepgray};
    cursor: pointer;
`;

const StyledSidePreview = styled.div`
    width: 3.25rem;
    height: 3.25rem;
    position: fixed;
    right: 3rem;
    top: 20%;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.color.deepgray};
    cursor: pointer;
`;
