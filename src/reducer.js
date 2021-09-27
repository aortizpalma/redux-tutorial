import * as actions from './actionTypes';
// Note: actions gets imported as an object.
// OR
// import { BUG_ADDED, BUG_REMOVED } from './actionTypes';

// []

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED: //previously "bugAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    description: "Bug 1",//action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED: // previously "bugRemoved":
            return state.filter(bug => bug.id !== action.payload.id);
        
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});

        default:
            return state;
    }

    /* 
    // Example with IF/ELSE statements instead of SWITCH
    if (action.type == 'bugAdded')
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    else if (action.type === 'bugRemoved')
    // this returns all the bugs except the one that matched the id of the removed bug
        return state.filter(bug => bug.id !== action.payload.id);
    
    return state;
     */
}