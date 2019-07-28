//import action types that are required by the reducer 
import { CREATE, READ, UPDATE, DELETE } from '../actions/guilty-person-action';

//initial state for redux store`
const initialState = {
    items: []
}

//reducer function
export default function (state = initialState, action) {
    console.log('*******222*****'+JSON.stringify(state.items));
    switch (action.type) {

        //handless creation of data
        case CREATE: {
            console.log('************'+JSON.stringify(state.items));
            return {

                items: [...state.items, action.payload.item]
            }
        }

        //reads all the data from the store
        case READ: return state;

        //handles item updates in redux store
        case UPDATE: {
            const updatedItem = { ...action.payload.item };
            return {
                items: [...state.items].map(item => {
                    if (item.id === updatedItem.id) {
                        return updatedItem
                    }
                    else return item;
                })
            }
        }

        //handles item deletion from redux store
        case DELETE: {
            const { id } = action.payload;
            return {
                items: [...state.items].filter(item => item.id !== id)
            }
        }

        //returns default state, in case some unknown action type is discovered
        default: return state;
    }
}