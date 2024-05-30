import styled from 'styled-components';
import { interRegular } from '@/styles/GlobalStyles';
import { CLIP_PATH_SMALL, CLIP_PATH_SMALL_INNER } from '@/constants/clipPath';



export const StyledChip = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['5xs']};
    height: ${({ theme }) => theme.spacing.m};
    padding: ${({ theme }) => `${theme.spacing['5xs']} ${theme.spacing['4xs']}`};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${interRegular.style.fontFamily};
    font-size: 14px;
    position: relative;

    &::before, &::after {
        z-index: 0;
        content: "";
        position: absolute;
    }

    &::before {
        inset: 0;
        clip-path: ${CLIP_PATH_SMALL};
        background: ${({ theme }) => theme.colors.darkGrey};
    }

    &::after {
        inset: 1px;
        clip-path: ${CLIP_PATH_SMALL_INNER};
        background: ${({ theme }) => theme.colors.black};
    }
    
    & > * {
        z-index: 1;
    }
`;
