import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing['6xs']};
`;

export const SwordIcon = styled(Image)<{ $highlighted: boolean }>`
    opacity: ${({ $highlighted }) => $highlighted ? '1' : '0.5'};
`;
