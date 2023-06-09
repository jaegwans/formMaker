import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface ITitle {
    id: number;
    type: string;
    title: string;
    description: string;
    question?: string;
    essential?: boolean;
    answer?: any;
}

export interface IForm {
    id: number;
    type: '단답형' | '장문형' | '객관식 질문' | '체크박스' | '드롭다운';
    question: string;
    answer?: any;
    essential?: boolean;
}

const initialState: (IForm | ITitle)[] = [
    { id: 0, type: 'title', title: '제목 없는 설문지', description: '' },
];

let id = 0;

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        editTitleForm: (state, action) => {
            state[0] = {
                ...state[0],
                title: action.payload.title,
            };
        },
        editDescriptionForm: (state, action) => {
            state[0] = {
                ...state[0],
                description: action.payload.description,
            };
        },
        addGeneralForm: (state) => {
            return [
                ...state,
                {
                    id: ++id,
                    type: '단답형',
                    question: '',
                    essential: false,
                    answer: [{ id: 0, value: '' }],
                },
            ];
        },
        deleteGeneralForm: (state, action) => {
            return state.filter((data) => data.id !== action.payload.id);
        },
        editGeneralForm: (state, action) => {
            let inx = state.findIndex((data) => data.id === action.payload.id);
            state[inx] = {
                ...state[inx],
                question: action.payload.question,
                type: action.payload.type,
                essential: action.payload.essential,
                answer: action.payload.answer,
            };
        },
        copyGeneralForm: (state, action) => {
            // return [
            //     ...state,
            //     {
            //         id: ++id,
            //         type: state[action.payload.id].type,
            //         question: state[action.payload.id].question as string,
            //     },
            // ];
            let inx = state.findIndex((data) => data.id === action.payload.id);
            state.splice(inx + 1, 0, {
                // type: state[inx].type,
                // question: state[inx].question as string,
                // essential: action.payload.essential,
                ...state[inx],
                id: ++id,
            });
        },
    },
});

export default formSlice;
export const {
    editTitleForm,
    editDescriptionForm,
    addGeneralForm,
    deleteGeneralForm,
    editGeneralForm,
    copyGeneralForm,
} = formSlice.actions;
