import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/image-product.jpg';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-grow: 0;
  flex-shrink: 1;
  box-shadow: 0px 7px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 15vw;
  height: 45vh;
  margin: 1rem 1rem 2rem 1rem;
  padding: 3rem;
`;

const ProductPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  margin: 1rem;
  padding: 0rem 1rem;
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

export default function ProductCard(props) {
  function addToCartHandler() {
    props.addToCart({ title: props.title, price: props.price });
    console.log(props.quantity);
    props.setQuantity(props.quantity + 1);
  }

  return (
    <StyledCard>
      <ProductPicture src={Image} alt="Imagen del producto" />
      <p>{props.title}</p>
      <strong>$ {props.price}</strong>
      <AddButton onClick={addToCartHandler}>
        <p>Agregar al Carrito</p>
      </AddButton>
    </StyledCard>
  );
}
