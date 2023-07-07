# 프로젝트 실행방법

1. git clone https://github.com/NR0617/preonboarding_July2023.git
2. 루트 폴더로 이동
3. yarn install
4. yarn dev

# 폴더 구조

```bash
├── src
│   ├── hooks
│   ├── pages
│   ├── router
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

# router 구현 방법

1. App 컴포넌트에 경로에 따라 보여질 페이지인 Route, 경로의 이동을 담당할 Router 컴포넌트를 생성한다.

```js
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
      </Router>
    </>
  );
}
```

2. Router에서 브라우저에 입력되는 path에 따라 렌더링할 children 컴포넌트를 변경한다. 뒤로가기를 누르면 history에 저장되어 있는 경로로 페이지를 이동한다.

```js
const Router = ({ children }) => {
  const [pathVariable, setPathVariable] = useState("/");
  const [renderComponent, setRenderComponent] = useState();

  window.addEventListener("popstate", function () {
    const path = !!history.state ? history.state.data : "/";
    this.window.location.replace(path);
  });

  useEffect(() => {
    setPathVariable(window.location.pathname);
  }, []);

  useEffect(() => {
    const result = children.filter((elm) => elm.props.path === pathVariable);
    setRenderComponent(result);
  }, [pathVariable]);

  return (
    <div>
      {renderComponent !== undefined ? renderComponent : <p>not found</p>}
    </div>
  );
};
```

# useRouter 구현 방법

1. useRouter 안에 push 메서드를 만들고 전달인자로 경로를 받는다.
2. 전달받은 경로로 페이지를 이동하고 history에 해당 경로를 저장한다.

```js
const useRouter = () => {
  const push = (path) => {
    history.pushState({ data: path }, "", path);
    window.location.replace(path);
  };
  return { push };
};
```
