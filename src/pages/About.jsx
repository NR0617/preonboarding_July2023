import useRouter from "../hooks/useRouter";
const About = () => {
  const { push } = useRouter();
  const handleRouter = () => {
    push("/");
  };
  return (
    <>
      <h1>about</h1>
      <button onClick={handleRouter}>go main</button>
    </>
  );
};

export default About;
