import { createSlice} from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[action.payload.id]= {
                id: id,
                front: front,
                back: back
            }
        }
    }
})

//selector
export const selectCards = state => 
    state.cards.cards;

//export actions
export const { addCard } = cardsSlice.actions;

//export reducer as default
export default cardsSlice.reducer;