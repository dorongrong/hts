import { useState } from 'react';
import { ChangeEvent } from 'react';

const WelcomeName = () => {
  const [name, setName1] = useState('홍길동');

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName1(newName);
  };

  return (
    <section>
      <input type="text" onChange={updateName} />
      <article>반갑습니다 {name}님</article>
    </section>
  );
};

export default WelcomeName;
