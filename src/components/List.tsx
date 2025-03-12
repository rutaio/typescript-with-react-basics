interface ListProps {
  // arba tik string masyvas, arba tik numbers masyvas:
  //  items: string[] | number[];
  // misrus duomenu tipas - masyve gali buti sumiksuoti duomenys (ir string ir numbers):
  items: (string | number)[];
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
