import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '200'} height={props.height || '200'} viewBox={props.viewBox ||"0 0 900 900"}  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

