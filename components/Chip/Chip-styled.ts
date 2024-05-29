import styled from 'styled-components';
import { interRegular } from '@/styles/GlobalStyles';



export const StyledChip = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['5xs']};
    height: ${({ theme }) => theme.spacing.m};
    padding: ${({ theme }) => `${theme.spacing['5xs']} ${theme.spacing['4xs']}`};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.darkGrey}`};
    font-family: ${interRegular.style.fontFamily};
`;
