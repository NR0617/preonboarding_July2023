import { useEffect, useState } from "react";

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

export default Router;
