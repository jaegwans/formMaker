import React from 'react';
import styled from 'styled-components';

function Copy() {
    return <StyledCopy>복사</StyledCopy>;
}

export default Copy;

const StyledCopy = styled.div`
    cursor: pointer;
    margin: 0 0.5rem;
`;
