import { useState } from 'react';
import { ChangeEvent } from 'react';

const HiddenName = () => {
  const [name, setName1] = useState('');
  let finalName = '';
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName1(newName);
  };

  if (name.length > 2) {
    const secretName1 = name.substring(0, 1);
    const secretName2 = name.substring(name.length - 1, name.length);
    let star = '';
    let finalName = '';
    for (let i = 0; i < name.length - 2; i++) {
      star = star.concat('*');
    }
    console.log(secretName1, star, secretName2);
    finalName = secretName1 + star + secretName2;
  } else finalName = name;

  return (
    <section>
      <input type="text" onChange={updateName} />
      <article>반갑습니다 {finalName}님</article>
    </section>
  );
};

export default HiddenName;
