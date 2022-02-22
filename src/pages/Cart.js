import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartList from '../components/CartList/CartList';

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

const Total = styled(CartItem)`
  height: 1vh;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

export default function Cart(props) {
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice(
      props.cart.reduce((init, current) => {
        return init + +current.price;
      }, 0)
    );
  }, [props.cart]);

  return (
    <Page>
      <PageTitle>
        <h1>Mi Carro</h1>
      </PageTitle>
      <CartList
        cart={props.cart}
        deleteFromCart={props.deleteFromCart}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <Total>
        <h3>Total: ${totalPrice}</h3>
      </Total>
      <Buttons>
        <Link to="/">
          <CustomButton>Volver al Catalogo</CustomButton>
        </Link>
        <Link to="/checkout">
          <CustomButton
            onClick={() => {
              props.checkoutValidation(totalPrice);
            }}
          >
            Finalizar Compra
          </CustomButton>
        </Link>
      </Buttons>
    </Page>
  );
}
