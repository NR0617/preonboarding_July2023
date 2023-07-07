import "./App.css";
import { store } from "./Redux/testReducer";
import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const handleButton = (e) => {
        if (e.target.name === "plus") {
            store.dispatch({ type: "plus" });
            const { count } = store.getState();
            setCounter(count);
        } else {
            store.dispatch({ type: "minus" });
            const { count } = store.getState();
            setCounter(count);
        }
    };
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log("상태변화감지", store.getState());
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <h1>createStore는 Redux폴더에 구현되어있습니다</h1>
            <h3>README에 상세한 설명이 나와있어요</h3>
            <button name="plus" onClick={handleButton}>
                +
            </button>
            <button name="minus" onClick={handleButton}>
                -
            </button>
            <div>{counter}</div>
            <a href="https://redux.js.org/">리덕스 홈페이지로 이동</a>
        </div>
    );
}

export default App;
