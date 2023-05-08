import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import styled from 'styled-components';
import FormSelector from 'components/preview/FormSelectorView';
import PreviewSelector from 'components/preview/PreviewSelector';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

// 각각 타입에 따른 미리보기 컴포넌트 만들기
// 응답 받는 state 만들기
interface IRes {
    question: string;
    response: any;
}

function Preview() {
    const [res, setRes] = useState<IRes[] | []>([]);
    const { form } = useSelector((state: RootState) => {
        return state;
    });

    const navigate = useNavigate();
    const _onClickSubmit = () => {
        navigate('/response', { state: res });
    };

    return (
        <StyledMain>
            <StyledItemWrapper>
                <br />

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
                            setRes={setRes}
                            res={res}
                        />
                    ))}
                <div>
                    <StyledSubmit onClick={_onClickSubmit}>제출</StyledSubmit>
                </div>
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

const StyledSubmit = styled.div`
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: center;
`;
