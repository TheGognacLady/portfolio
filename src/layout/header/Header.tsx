import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts'];
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #afc996;
  display: flex;
  justify-content: space-between;
`

