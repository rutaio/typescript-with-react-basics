interface Product {
  name: string;
  price: string;
  isOnSale: boolean;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <h4>{product.price}</h4>
          {product.isOnSale && <p style={{color:'green'}}>Preke yra su nuolaida!</p>}
        </div>
      ))}
    </div>
  );
};
