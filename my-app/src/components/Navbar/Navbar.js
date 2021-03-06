import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from './logo1.png'
import { ButtonContainer } from '../Button'


export default class Navbar extends Component {
  render() {
      return(
         <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
          <Link to="/">
       <img src={logo} alt="logo-cooksoo" className="navbar-brand" width="160px" height="80px" />
          </Link>
          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                  <Link to="./combo" className="nav-link">
                   комбо
                  </Link>
                  </li>
              <li className="nav-item ml-5">
                  <Link to="./productlist" className="nav-link">
                   меню
                  </Link>
                  </li>
                  <li className="nav-item ml-5">
                  <Link to="./about" className="nav-link">
                   о нас
                  </Link>
                  </li>
                  <li className="nav-item ml-5">
                  <Link to="./share" className="nav-link">
                   акции
                  </Link>
                  </li>
                  <li className="nav-item ml-5">
                  <Link to="./news" className="nav-link">
                   новости
                  </Link>
              </li>
          </ul>
          <Link to="./cart" className="ml-auto">
              <ButtonContainer>
                  {/* <i className="fa fa-cart-plus"></i> */}
                  Корзина
              </ButtonContainer>
          </Link>
         </NavWrapper>
      )
  }
};

const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}
`

