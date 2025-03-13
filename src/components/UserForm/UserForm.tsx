import { useState } from 'react';

// rasome export, nes sis interface yra reikalingas ir App elemente:
export interface User {
  name: string;
  age: number;
}

interface UserFormProps {
  // onSubmit() yra callback
  // turime pasakyti kad user: User, nes user yra kaip konstanta, kuri yra lygi objektui User
  // void reiskia kad funkcija nieko negrazina (nera return'o):
  onSubmit: (user: User) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  // Panaudojame React.FormEvent (event tipa), todel TypeScript supranta kas yra event:
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // siunciame user props i tevini elementa:
    onSubmit({ name, age });
  };

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
        // duomenys is input'u yra stringai! todel naudojame Number() kad konvertuoti:
        onChange={(event) => setAge(Number(event.target.value))}
      ></input>
      <button type="submit">Send</button>
    </form>
  );
};
