import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../REDUX/Slice/Products';
import { setCategories } from '../../REDUX/Slice/Category';

function CategoryMenu() {
  // const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const { categories } = useSelector((state) => state.categories);

  // const { categories } = state;

  const { loading: ld, data: products } = useQuery(QUERY_PRODUCTS);
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  useEffect(() => {
    if (categoryData) {
      dispatch(setCategories(categoryData.categories));
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch(setCategories(categories));
      });
    }
    if (products) {
      dispatch(setProducts(products.products));
      products.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!ld) {
      idbPromise('products', 'get').then((products) => {
        dispatch(setProducts(products));
      });
    }
  }, [categoryData, products, ld, loading, dispatch, categories,category]);

  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { category },
  });

  const getProductss = (id) => {
    setCategory(id);
    dispatch(setProducts(data.products));
    
    setTimeout(() => {
      setCategory(id);
      dispatch(setProducts(data.products));
    }, 500);
  }

  return (
    <>
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            getProductss(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button
        onClick={() => {
          getProductss('');
        }}
      >
        All
      </button>
    </div>
      </>
  );
}

export default CategoryMenu;
