import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';

const Shop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: fit-content;
`;

const CustomButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  margin: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid black;
  border-radius: 50px;
  transition: all 300ms ease-in-out;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transition: all 150ms ease-in-out;
  }
`;

export default function ProductList(props) {
  const [curPage, setCurPage] = useState(1);
  
  const pageCreation = () => {
    const startIndex = curPage * props.dataMax - props.dataMax;
    const endIndex = startIndex + props.dataMax;
    const searchFilter = props.catalog.filter((data) => {
      if (props.search === null) {
        return data;
      } else if (
        data.title.toLowerCase().includes(props.search.toLowerCase())
      ) {
        return data;
      }
    });
    const createdPage = searchFilter.slice(startIndex, endIndex);
    return createdPage;
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [curPage]);

  const pageNumbers = () => {
    let start = Math.floor((curPage - 1) / props.pageMax) * props.pageMax;
    return new Array(props.pageMax).fill().map((_, idx) => start + idx + 1);
  };

  function prevPage() {
    setCurPage((page) => page - 1);
  }

  function nextPage() {
    setCurPage((page) => page + 1);
  }

  function selectPage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurPage(pageNumber);
  }

  return (
    <>
      <Shop>
        {pageCreation().length !== 0 ? (
          pageCreation().map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              title={product.title}
              price={product.price}
              addToCart={props.addToCart}
              quantity={props.quantity}
              setQuantity={props.setQuantity}
            />
          ))
        ) : (
          <h4>No hay mas productos que coincidan con la busqueda.</h4>
        )}
      </Shop>
      <div>
        <CustomButton
          onClick={prevPage}
          disabled={curPage === 1 ? true : false}
        >
          {'<'}
        </CustomButton>
        {pageNumbers().map((number, index) => (
          <CustomButton
            key={index}
            onClick={selectPage}
            style={
              curPage === number
                ? { backgroundColor: 'white', color: 'black' }
                : null
            }
          >
            <span>{number}</span>
          </CustomButton>
        ))}
        <CustomButton
          onClick={nextPage}
          disabled={curPage === 4 ? true : false}
        >
          {'>'}
        </CustomButton>
      </div>
    </>
  );
}
