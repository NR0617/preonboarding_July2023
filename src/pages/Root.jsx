import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  const handleRouter = () => {
    push("/about");
  };
  return (
    <>
      <h1>root</h1>
      <button onClick={handleRouter}>about</button>
    </>
  );
};

export default Root;
