import { UserProfile } from './components/UserProfile';
import { List } from './components/List';
import { ObjectList } from './components/ObjectsList';
import { Button } from './components/Button';
import { ProductList } from './components/ProductList/ProductList';
import { UserForm } from './components/UserForm/UserForm';

function App() {
  const handleSubmit = () => {
    console.log(name, age);
  };

  return (
    <>
      <UserProfile name={'Ruta'} age={37} isActive={true} />
      <UserProfile name={'Tomas'} isActive={false} />
      <List items={['kriause', 'bananas', 'obuolys', 1]} />
      <List items={[10, 12, 32]} />
      <ObjectList
        items={[
          { name: 'Ruta', age: 37 },
          { name: 'Mari', age: 27 },
        ]}
      />
      <Button
        size="32px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <Button
        size="24px"
        title="Pakeisk"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <Button
        size="16px"
        title="Istrink"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <ProductList
        products={[
          { name: 'Melionai', price: '4.59 €', isOnSale: false },
          { name: 'Jogurtas', price: '1.59 €', isOnSale: false },
          { name: 'Duona', price: '2.59 €', isOnSale: false },
          { name: 'Pomidorai', price: '2.99 €', isOnSale: true },
        ]}
      />
      <UserForm handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
