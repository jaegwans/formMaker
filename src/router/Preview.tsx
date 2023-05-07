import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styled from 'styled-components';
import FormSelector from 'components/preview/FormSelectorView';
import PreviewSelector from 'components/preview/PreviewSelector';

function Preview() {
    const { form } = useSelector((state: RootState) => {
        return state;
    });
    return (
        <StyledMain>
            <StyledItemWrapper>
                {JSON.stringify(form)}
                <FormSelector props={form[0]} key={form[0].id} />
                {form
                    .filter((data) => data.id !== 0)
                    .map((data) => (
                        <PreviewSelector
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
                            answer={data.answer}
                        />
                    ))}
            </StyledItemWrapper>
        </StyledMain>
    );
}

export default Preview;

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
