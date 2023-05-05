import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';

function App() {
    return (
        <StyledMain>
            <StyledItemWrapper>
                <Title />
            </StyledItemWrapper>
        </StyledMain>
    );
}

export default App;

const StyledMain = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
`;

const StyledItemWrapper = styled.div`
    width: 37.5rem;
    gap: 1rem;
`;
