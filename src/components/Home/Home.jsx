import React from 'react';
import { Card } from '../Card/Card';
import { Layout } from '../../helpers/Layout';
import { contextGB } from '../../helpers/Context/Context';

export const Home = () => {
  const { data, setSearchValue, filteredProducts, searchValue } = React.useContext(contextGB);

  function render() {
    if (searchValue) {
      return (
        filteredProducts(data, searchValue)?.map((card) => (
          <Card key={card.id} data={card} />
        ))
      );
    } else {
      return (
        data?.map((card) => (
          <Card key={card.id} data={card} />
        ))
      );
    }
  }

  return (
    <Layout>
      <input
        type="search"
        placeholder='Buscar'
        className='p-4 w-80 border border-black rounded-lg mb-8'
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <div className='grid grid-cols-4 gap-5'>{render()}</div>
    </Layout>
  );
};
