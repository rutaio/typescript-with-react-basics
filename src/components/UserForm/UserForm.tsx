import { useState } from 'react';

interface UserFormProps {
  name: string;
  age: number;
}

export const UserForm: React.FC<UserFormProps> = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      ></input>
      <button type="submit">Send</button>
    </form>
  );
};
