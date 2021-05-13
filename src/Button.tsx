/*const Button = ({ name2 }: { name2: string }) => {
  return <button>{name2}</button>;
};

export default Button;*/

type ButtonType = {
  name: string;
  callback: (name: string) => void;
};

const Button = (props: ButtonType) => {
  const { name, callback } = props;
  return <button onClick={() => callback(name)}>{name}</button>;
};

export default Button;
