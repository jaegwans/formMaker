import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { editDescriptionForm } from 'app/slices/formSlice';
import FormSelector from 'components/FormSelector';
import SideBar from 'components/side/SideBar';
import GeneralForm from 'components/form/GeneralForm';

function App() {
    const form = useSelector((state: RootState) => {
        return state;
    });

    return (
        <StyledMain>
            <SideBar />
            <StyledItemWrapper>
                {/* <Title /> */}
                {form.form.map((data) => (
                    <FormSelector props={data} key={data.id} />
                ))}
                <GeneralForm />
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
    display: flex;
    flex-direction: column;
    width: 37.5rem;
    gap: 3rem;
`;
