import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #292929;
  p {
    color: white;
  }
`;

const Title = styled(Link)`
  color: white;
  margin-left: 2rem;
  text-decoration: none;
  font-size: medium;
  font-weight: 500;
`;

const NavInfo = styled(Title)`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
  p {
    padding: 0rem 0.5rem;
  }
`;

const Cart = styled(Title)`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 2rem;
  span {
    background-color: #da0000;
    border-radius: 50%;
    padding: 4px 8px 4px 8px;
    margin-left: 0.5rem;
  }
`;

const Credit = styled.div`
  display: 'flex';
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  p {
    color: black;
  }
  span {
    background-color: #00773c;
    border-radius: 40px;
    color: white;
    padding: 5px;
  }
`;

export default function Layout(props) {
  function cartQuantity() {
    if (props.cart?.length !== 0) {
      return props.cart.length;
    }
    return 0;
  }

  return (
    <>
      <header>
        <NavBar>
          <div>
            <Title to="/">Tienda de Productos</Title>
          </div>
          <NavInfo as="div">
            <p>{props.profile.firstName}</p>
            <Cart to="/cart">
              Mi Carro
              <span>{cartQuantity()}</span>
            </Cart>
            <Credit>
              <p>
                Crédito: <span>${props.profile.credit}</span>
              </p>
            </Credit>
          </NavInfo>
        </NavBar>
      </header>
      <Main>{props.children}</Main>
    </>
  );
}
