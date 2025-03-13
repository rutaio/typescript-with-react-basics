import { UserProfile } from './components/UserProfile';
import { List } from './components/List';
import { ObjectList } from './components/ObjectsList';
import { Button } from './components/Button';
import { ProductList } from './components/ProductList/ProductList';
import { UserForm } from './components/UserForm/UserForm';
import { User } from './components/UserForm/UserForm';
import { Alert } from './components/Alert';
import { UserRoleBadge } from './components/UserRoleBadge';
import { ShippingStatus } from './components/ShippingStatus/ShippingStatus';
import { ShippingStatusEnum } from './components/ShippingStatus/types';
import { StatusBadge } from './components/StatusBadge/StatusBadge';
import { StatusBadgeEnum } from './components/StatusBadge/types';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductCategoryEnum } from './components/ProductCard/types';

function App() {
  // priima duomenis is vaikinio elemento:
  const handleUserForm = (user: User) => {
    console.log(user.name, user.age);
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
      <UserForm onSubmit={handleUserForm} />
      <Alert type="success" message="Sekme!" />
      <Alert type="warning" message="Normalu" />
      <Alert type="error" message="Sugedo..." />
      <UserRoleBadge role="editor" name="John" />
      <UserRoleBadge role="viewer" name="Ruta" />
      <UserRoleBadge role="admin" name="Mary" />
      <ShippingStatus id={312} status={ShippingStatusEnum.Delivered} />
      <ShippingStatus id={312} status={ShippingStatusEnum.Pending} />
      <StatusBadge status={StatusBadgeEnum.InProgress}/>
      <StatusBadge status={StatusBadgeEnum.Completed}/>
      <StatusBadge status={StatusBadgeEnum.Pending}/>
      <ProductCard title={'Samsung Galaxy'} category={ProductCategoryEnum.Electronics}/>
      <ProductCard title={'Harry Potter'} category={ProductCategoryEnum.Books}/>
      <ProductCard title={'Swimming Suit'} category={ProductCategoryEnum.Clothing}/>
    </>
  );
}

export default App;
