import { createSlice} from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuizz: (state, action) => 
        {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: []
                }
        }
    }
})

export const selectQuizzes = state => 
    state.quizzes.quizzes;

export const { addQuizz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
