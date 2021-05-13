import { useState } from 'react';
import Pad from './Pad';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const inputKey = (key: string) => {
    if (key === '=') {
      setExpression(eval(expression));
    } else {
      setExpression(expression + key);
    }
  };

  return (
    <>
      <input type="text" value={expression} />
      <section>
        <Pad KeyName="1" callback={inputKey} />
        <Pad KeyName="2" callback={inputKey} />
        <Pad KeyName="3" callback={inputKey} />
      </section>
      <section>
        <Pad KeyName="4" callback={inputKey} />
        <Pad KeyName="5" callback={inputKey} />
        <Pad KeyName="6" callback={inputKey} />
      </section>
      <section>
        <Pad KeyName="7" callback={inputKey} />
        <Pad KeyName="8" callback={inputKey} />
        <Pad KeyName="9" callback={inputKey} />
      </section>
      <section>
        <Pad KeyName="0" callback={inputKey} />
        <Pad KeyName="+" callback={inputKey} />
        <Pad KeyName="-" callback={inputKey} />
        <Pad KeyName="*" callback={inputKey} />
        <Pad KeyName="/" callback={inputKey} />
        <Pad KeyName="=" callback={inputKey} />
      </section>
    </>
  );
};

export default Calculator;
