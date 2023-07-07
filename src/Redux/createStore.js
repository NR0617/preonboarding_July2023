export const createStore = (reducer) => {
    let state;
    let currentListeners = new Map();
    let listenerCounter = 0;

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        const listeners = Array.from(currentListeners.values());
        for (let listener of listeners) {
            listener();
        }
        return action;
    };

    const subscribe = (func) => {
        const listenerId = listenerCounter++;
        currentListeners.set(listenerId, func);
        console.log(currentListeners);
        return function unsubscribe() {
            console.log(listenerId);
            currentListeners.delete(listenerId);
        };
    };

    const store = { getState, dispatch, subscribe };

    return store;
};
