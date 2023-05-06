import React from 'react';
import styled from 'styled-components';
import Title from 'components/form/Title';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { editDescriptionForm } from 'app/slices/formSlice';
import FormSelector from 'components/FormSelector';
import SideBar from 'components/side/SideBar';
import GeneralForm from 'components/form/General/GeneralForm';

function App() {
    const { form } = useSelector((state: RootState) => {
        return state;
    });

    return (
        <StyledMain>
            <SideBar />
            <StyledItemWrapper>
                {/* <Title /> */}
                {/* {form.form.map((data) => (
                    <FormSelector props={data} key={data.id} />
                ))} */}
                {JSON.stringify(form)}
                <FormSelector props={form[0]} key={form[0].id} />
                {form
                    .filter((data) => data.id !== 0)
                    .map((data) => (
                        <GeneralForm
                            key={data.id}
                            id={data.id}
                            type={
                                data.type as
                                    | '단답형'
                                    | '장문형'
                                    | '객관식 질문'
                                    | '체크박스'
                                    | '드롭다운'
                            }
                            question={data.question as string}
                            essential={data.essential}
                        />
                    ))}
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
    gap: 1rem;
`;
