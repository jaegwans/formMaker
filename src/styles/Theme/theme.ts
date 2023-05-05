import { DefaultTheme } from 'styled-components';

const color = {
    while: '#FFFFFF',
    black: '#000000',
    backpurple: '#2C2C54',
};

const borderRadius = {
    small: '4px',
    medium: '8px',
    large: '16px',
};

export type ColorsTypes = typeof color;
export type BorderRadiusTypes = typeof borderRadius;

const theme: DefaultTheme = {
    color,
    borderRadius,
};

export default theme;
