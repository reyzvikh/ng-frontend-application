import styled from 'styled-components';
import { cinzel } from '@/styles/GlobalStyles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['3xs']};
    padding: ${({ theme }) => theme.spacing['2xs']};
    border: ${({ theme }) => `1px solid ${theme.colors.darkGrey}`};
    height: 230px;
    cursor: pointer;
`;

export const Cover = styled.img`
    clip-path: polygon(
        4px 0%,
        calc(100% - 4px) 0%,
        100% 4px,
        100% calc(100% - 4px),
        calc(100% - 4px) 100%,
        4px 100%,
        0% calc(100% - 4px),
        0% 4px
    );
    height: 86px;
    width: 100%;
    object-fit: cover;
`;

export const Title = styled.span`
    font-family: ${cinzel.style.fontFamily};
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
`;

export const QuestDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const GeneralInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['4xs']};
`;

export const ChipsWrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing['5xs']};
`;