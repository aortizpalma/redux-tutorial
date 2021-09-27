import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// })

store.dispatch(bugAdded("Bug 1"));

// unsubscribe();

// store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(1));

console.log(store.getState());






/* import { produce } from 'immer';

console.log("Hello World!");


let book = { title: "Harry Potter" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);
console.log(updated); */