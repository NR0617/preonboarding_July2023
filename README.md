# 프로젝트 실행 방법

1. git clone --branch master https://github.com/NR0617/preonboarding_July2023.git
2. 프로젝트로 이동
3. yarn install
4. yarn dev

# 폴더구조

```bash
├── src
│   ├── redux
│   │   ├── createStore.js
│   │   └── testReducer.js
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

# 구현 방법

1. createStore는 reducer를 전달인자로 받고 store(getState, dispatch, subscribe)를 리턴한다.
   따라서 먼저 createStore의 전체적인 형태를 만들고 메서드의 내부를 구현하였다.

    ```js
    export const createStore = (reducer) => {
        const getState = () => {};
        const dispatch = () => {};
        const subscribe = () => {};

        const store = { getState, dispatch, subscribe };

        return store;
    };
    ```

2. state를 반환하도록 getState를 구현하였다.

```js
export const createStore = (reducer) => {
    let state;

    const getState = () => {
        return state;
    };
};
```

3. dispatch는 state와 action객체를 전달인자로 받고 리듀서에 전달할 수 있도록 구현하였다.
   dispatch가 실행될 때마다 구독하고있는 핸들러들이 동작한다.

```js
export const createStore = (reducer) => {
    let state;
    let currentListeners = new Map();

    const dispatch = (action) => {
        state = reducer(state, action);
        const listeners = Array.from(currentListeners.values());
        for (let listener of listeners) {
            listener();
        }
        return action;
    };
};
```

4. 구독을 시작하는 핸들러를 currentListener 객체에 등록하고 구독을 취소하는 함수를 반환하는 subscribe 메서드를 구현하였다.

```js
export const createStore = (reducer) => {
    let currentListeners = new Map();
    let listenerCounter = 0;

    const subscribe = (func) => {
        const listenerId = listenerCounter++;
        currentListeners.set(listenerId, func);
        return function unsubscribe() {
            currentListeners.delete(listenerId);
        };
    };
};
```
