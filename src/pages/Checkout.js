import React from 'react';``
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageTitle = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  h1 {
  }
`;

const Status = styled.div`
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

export default function Checkout(props) {
  return (
    <div>
      <PageTitle>
        <h1>Estado de la Compra</h1>
      </PageTitle>
      <Status>
        {props.checkoutStatus === true ? (
          <h3>La compra se realizó con éxito</h3>
        ) : (
          <h3>
            Ocurrió un error con la compra. Revisá que el importe no supere el
            crédito disponible en tu cuenta.
          </h3>
        )}
      </Status>
      {props.checkoutStatus === true ? (
        <Link to="/">
          <CustomButton
            onClick={() => {
              props.setCart([]);
            }}
          >
            Volver al Catálogo
          </CustomButton>
        </Link>
      ) : (
        <Link to="/cart">
          <CustomButton>Volver al Carrito</CustomButton>
        </Link>
      )}
    </div>
  );
}
