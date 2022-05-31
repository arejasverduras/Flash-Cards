import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => 
        {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
                }
        },
        addQuizIdToTopic: (state, action) => 
            {
                state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            }
    }
});

//create and export a selector for 'topics'
export const selectTopics = state => 
    state.topics.topics;

//export action creators
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;

//export reducers as the default export
export default topicsSlice.reducer;
