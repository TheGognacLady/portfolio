import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
       <StyledSkill>
           <Icon width={'75px'} height={'75px'} viewBox={'0 0 75 75'} iconId={props.iconId}/>
           <SkillTitle>{props.title}</SkillTitle>
           <SkillText>{props.description}</SkillText>
       </StyledSkill>
    );
};

const StyledSkill = styled.div `
  background-color: antiquewhite;
  width: 30%;
  margin: 10px;
  
`

const SkillTitle = styled.h3 `

`

const SkillText = styled.p `

`