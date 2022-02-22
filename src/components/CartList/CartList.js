import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/image-product.jpg';

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-grow: 0;
  flex-shrink: 1;
  box-shadow: 0px 7px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: auto;
  height: 3vh;
  margin: 1rem 1rem 2rem 1rem;
  padding: 3rem;
`;

const ProductPicture = styled.img`
  max-width: 4rem;
  max-height: 4rem;
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

export default function CartList(props) {
  return (
    <>
      {props.cart.length !== 0 ? (
        props.cart.map((item, index) => (
          <CartItem key={index}>
            <ProductPicture src={Image} alt="Imagen del producto" />
            <p>{item.title}</p>
            <strong style={{ marginLeft: '1rem' }}>$ {item.price}</strong>
            <CustomButton
              onClick={() => {
                props.setTotalPrice(props.totalPrice - item.price);
                props.deleteFromCart(item, index);
              }}
            >
              Borrar
            </CustomButton>
          </CartItem>
        ))
      ) : (
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <h4>Agregue productos a su carro</h4>
        </div>
      )}
    </>
  );
}
