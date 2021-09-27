import * as actions from './actionTypes';

/* export const bugAdded = description => ({
    type: actions.BUG_ADDED, // previoulsy"bugAdded",
    payload: {
        description // previously "Bug1" or description: description
}); */

// NB: Action creators can be set with traditional funtions as below or arrow functions as above:

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED, // previoulsy"bugAdded",
//         payload: {
//             description: "Bug1"
//         }
//     }
// }


export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
});

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED, // previously "bugRemoved",
    payload: {
        id: 1
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id // IF the property paramter is the same as the value (e.g. id: id), we can simplify the syntax by keeping only the paramter value without the two dots (e.g. "id")
    }
});