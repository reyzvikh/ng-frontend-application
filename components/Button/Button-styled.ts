import styled, { DefaultTheme } from 'styled-components';
import { Variant } from '@/types';
import { cinzel } from '@/styles/GlobalStyles';
import { CLIP_PATH_DEFAULT_INNER, CLIP_PATH_DEFAULT } from '@/constants/clipPath';

const getStylesByVariant = (variant: Variant, theme: DefaultTheme): string => {
    const stylesByVariant: Record<Variant, string> = {
        'primary': `
            color: ${theme.colors.black};
        
            &::before {
                background: ${theme.colors.lightBrown};
            }
            
            &::after {
                background: ${theme.colors.gold};
            }
        `,
        'secondary': `
            color: ${theme.colors.gold};
        
            &::before {
                background: ${theme.colors.darkGrey};
            }
            
            &::after {
                background: ${theme.colors.black};
            }
        `,
    };

    return stylesByVariant[variant];
};

export const StyledButton = styled.button<{ variant: Variant }>`
    border: none;
    cursor: pointer;
    position: relative;
    transition: all 0.4s ease;
    background-color: transparent;
    padding: ${({ theme }) => `${theme.spacing['3xs']} ${theme.spacing.s}`};
    ${({ variant, theme }) => getStylesByVariant(variant, theme)}
    
    &:hover {
        color: white;
    }

    &::before, &::after {
        z-index: 0;
        content: "";
        position: absolute;
    }

    &::before {
        inset: 0;
        clip-path: ${CLIP_PATH_DEFAULT};
    }

    &::after {
        inset: 1px;
        clip-path: ${CLIP_PATH_DEFAULT_INNER};
    }
`;

export const ButtonText = styled.span`
    font-family: ${cinzel.style.fontFamily};
    position: inherit;
    z-index: 1;
`;
