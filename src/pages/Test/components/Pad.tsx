type PadType = {
  KeyName: string;
  callback: (KeyName: string) => void;
};

const Pad = (props: PadType) => {
  const { KeyName, callback } = props;
  return <button onClick={() => callback(KeyName)}>{KeyName}</button>;
};

export default Pad;
