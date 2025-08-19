import Logo from "../assets/react.svg";

const Example = () => {
  const name = "Mike";
  let age = 25;
  const dept = "cyber security";
  return (
    <section>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Class: {dept}</p>
      <img src={Logo} alt="logo" />
    </section>
  );
};

export default Example;
