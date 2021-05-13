import { useState } from 'react';
import { ChangeEvent } from 'react';

const ConditionalText = () => {
  const [name, setName1] = useState('');

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    /*if (name.length<6 ? name : '' ) {
        setName1("안돼 돌아가")
    } 
    else */ setName1(newName);
  };

  return (
    <section>
      <input type="text" onChange={updateName} />
      <article>반갑습니다 {name.length > 5 && name}님</article>
    </section>
  );
};

export default ConditionalText;
