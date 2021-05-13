import { useState } from 'react';
import './App.css';
import Calculator from './pages/Test/components/Calculator';
import Title from './Title';
import Button from './Button';
import Adult from './Adult';
import Photo from './Photo';
import Counter from './Counter';
import { ChangeEvent } from 'react';
import { KeyboardEvent } from 'react';
import ConditionalText from './ConditionalText';
import HiddenName from './HiddenName';
import Test from './pages/Test';

const App = () => {
  const [latestName, setLatestName] = useState('');
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };
  /*const welcomeText: string = 'Hello World!';
  const count: number = 10;

  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === 'h') {
      event.preventDefault();
      event.stopPropagation();
    }*/

  return (
    <>
      <Test />
    </>
    /*
    <>
      <HiddenName />
      <input type="text" onKeyDown={preventKeyDown} />
      onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.currentTarget.value)}
      <div className="App">
        <Title title="TITLE" subTitle="sub" />

        <Adult age={25} />
        <Title title={welcomeText} />
        {count > 5 ? <Button name2="go" /> : <Button name2="back" />}
        <Photo adress="C:/source/pepe.png" description="군대가는순형"></Photo>
        <Counter defaultCount={0} />
      </div>
    </>*/
  );
};

export default App;
