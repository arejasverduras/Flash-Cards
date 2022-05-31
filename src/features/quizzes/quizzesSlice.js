import { createSlice} from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

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
                cardIds: action.payload.cardIds
                }
        }
    }
})

export const addQuizzThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuizz(payload));
        dispatch(addQuizIdToTopic({topicId: payload.topicId, quizId: payload.id}))
    }
}

export const selectQuizzes = state => 
    state.quizzes.quizzes;

export const { addQuizz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
