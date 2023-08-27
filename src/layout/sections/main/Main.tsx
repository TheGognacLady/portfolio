import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={'center'} justifyContent={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Evgeniya Nadtoka</h2>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={photo} alt="My photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`

  min-width: 100vh;
  background-color: beige;
`

const Photo = styled.img`

  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`