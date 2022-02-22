import React, { useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';

const Page = styled.div`
  width: 75%;
`;

const PageTitle = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  h1 {
  }
`;

const Filters = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  justify-content: space-between;
`;

const Search = styled.input`
  padding: 0.5rem;
  width: 13rem;
`;

const Sort = styled(Search)`
  width: 8rem;
`;

export default function Catalog(props) {
  const [search, setSearch] = useState(null);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSort() {
    props.sortCatalog();
  }

  return (
    <Page>
      <PageTitle>
        <h1>Catálogo</h1>
      </PageTitle>
      <Filters>
        <Search
          type="text"
          name="Busqueda de Productos"
          placeholder="Buscar productos por nombre"
          onChange={() => {
            handleSearch();
          }}
        />
        <div>
          <strong style={{ padding: '0rem 1rem' }}>Ordenar por:</strong>
          <Sort
            as={'select'}
            defaultValue={'Seleccionar'}
            name="Orden"
            onChange={handleSort}
          >
            <option disabled value="Seleccionar">
              Seleccionar
            </option>
            <option value={1}>Mas Baratos</option>
          </Sort>
        </div>
      </Filters>
      <ProductList
        catalog={props.catalog}
        search={search}
        pageMax={4}
        dataMax={6}
        addToCart={props.addToCart}
        quantity={props.quantity}
        setQuantity={props.setQuantity}
      />
    </Page>
  );
}
