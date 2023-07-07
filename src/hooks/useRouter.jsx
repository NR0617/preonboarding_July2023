const useRouter = () => {
  const push = (path) => {
    history.pushState({ data: path }, "", path);
    window.location.replace(path);
  };
  return { push };
};

export default useRouter;
