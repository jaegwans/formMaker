import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 0, type: 'title', title: '제목 없는 설문지', description: '' },
];

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
    },
});

export default formSlice;
export const { editTitleForm, editDescriptionForm } = formSlice.actions;
