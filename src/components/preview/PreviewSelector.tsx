import React from 'react';

interface IGeneralForm {
    id: number;
    type: '단답형' | '장문형' | '객관식 질문' | '체크박스' | '드롭다운';
    question: string;
    answer?: [];
    essential?: boolean;
}

function PreviewSelector({
    type,
    question,
    id,
    essential,
    answer,
}: IGeneralForm) {
    return <div>previewSelector</div>;
}

export default PreviewSelector;
