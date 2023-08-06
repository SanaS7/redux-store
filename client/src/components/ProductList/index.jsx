import { useEffect,useState } from 'react';
import ProductItem from '../ProductItem';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useSelector } from 'react-redux';



function ProductList() {
  const { products } = useSelector((state) => state.products);

  const { loading, data } = useQuery(QUERY_PRODUCTS);



  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {products?.length ? (
        <div className="flex-row">
          {products?.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
