// skirtas duomenu tipams:
interface Item {
  name: string;
  age: number;
}

// skitas props'ams:
interface ObjectListProps {
  items: Item[];
}

export const ObjectList: React.FC<ObjectListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.age}</p>
        </div>
      ))}
    </div>
  );
};
