import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Response() {
    const { state } = useLocation();

    return (
        <StyledMain>
            <StyledItemWrapper>
                {state && (
                    <>
                        <h1>{state[0].title}</h1>
                        <h3>{state[0].description}</h3>
                    </>
                )}
                {state.map((item: any, key: number) => (
                    <div key={key}>
                        <h1>Q.{item.question}</h1>
                        <p>A.{item.response}</p>
                    </div>
                ))}
            </StyledItemWrapper>
        </StyledMain>
    );
}

export default Response;

const StyledMain = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
`;

const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 37.5rem;
    gap: 1rem;
`;
