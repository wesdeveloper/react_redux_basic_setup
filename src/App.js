import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/modules/products/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { products, isFetching, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {isFetching && <h3>Carregando...</h3>}
        {!isFetching && error && <h3>Algo deu errado...</h3>}

        {products && (
        <ul>
          {products.map(({ id, name }) => (
            <li key={id}>
              {name}
            </li>
          ))}
        </ul>
        )}
      </header>
    </div>
  );
}

export default App;
