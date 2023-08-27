import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} alignItems={'center'}>
                <Name>Evgeniya</Name>
                <SocialIconsList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width= {'21px'} viewBox={'0 0 21px 21px'}iconId={'instagram'}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width= {'21px'} viewBox={'0 0 21px 21px'}iconId={'telegram'}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width= {'21px'} viewBox={'0 0 21px 21px'}iconId={'vk'}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width= {'21px'} viewBox={'0 0 21px 21px'}iconId={'linkedin'}/>
                        </SocialIconLink>
                    </SocialItem>

                </SocialIconsList>
                <Copyright>© 2023 Evgeniya Nadtoka, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: #ceabbf;
`
const SocialIconsList = styled.ul`
  display: flex;
  gap: 30px
`

const SocialIconLink = styled.a`

`

const Name = styled.span`

`
const Copyright = styled.small`

`
const SocialItem = styled.li`

`