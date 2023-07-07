export const createStore = (reducer) => {
  // state 초기값 설정
  //let state = reducer();
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
    return function unsubscribe() {
      //delete currentListeners.listenerId;
      currentListeners.delete(listenerId);
    };
  };

  const store = { getState, dispatch, subscribe };

  return store;
};
