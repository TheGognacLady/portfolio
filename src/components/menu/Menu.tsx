import React from 'react';
import styled from "styled-components";



type MenuPropsType = {
    items: string[]
}
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((el,index )=>
                    <li key={index}><a href="">{el}</a> </li>)}
            </ul>
        </StyledMenu>

    );
};

const StyledMenu = styled.nav`

    ul {
      display: flex;
      gap: 30px;
      justify-content: center;
    }
`

