import { ProductCategoryEnum } from './types';

interface ProductCardProps {
  title: string;
  category: ProductCategoryEnum;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  category,
}) => {
  const getColor = () => {
    switch (category) {
      case ProductCategoryEnum.Electronics:
        return 'blue';
      case ProductCategoryEnum.Books:
        return 'brown';
      case ProductCategoryEnum.Clothing:
        return 'pink';
    }
  };

  return (
    <div style={{ color: getColor() }}>
      <h2>{title}</h2>
      <p>{category}</p>
    </div>
  );
};
