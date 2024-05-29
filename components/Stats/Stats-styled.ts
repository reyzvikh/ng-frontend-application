import styled from 'styled-components';
import { cinzel } from '@/styles/GlobalStyles';

export const Container = styled.div<{ color?: string }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['4xs']};
    font-family: ${cinzel.style.fontFamily};
    color: ${({ theme, color }) => color ?? theme.colors.white};
`;