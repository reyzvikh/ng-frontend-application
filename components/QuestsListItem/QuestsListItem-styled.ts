import Image from 'next/image';
import styled from 'styled-components';
import { cinzel } from '@/styles/GlobalStyles';
import { CLIP_PATH_DEFAULT, CLIP_PATH_DEFAULT_INNER } from '@/constants/clipPath';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['3xs']};
    padding: ${({ theme }) => theme.spacing['2xs']};
    height: 230px;
    cursor: pointer;
    width: calc(33% - 8px);

    @media only screen and (max-width: 1440px) {
        width: calc(50% - 6px);
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    position: relative;

    &::before, &::after {
        z-index: 0;
        content: "";
        position: absolute;
    }

    &::before {
        inset: 0;
        clip-path: ${CLIP_PATH_DEFAULT};
        background: ${({ theme }) => theme.colors.darkGrey};
    }

    &::after {
        inset: 1px;
        clip-path: ${CLIP_PATH_DEFAULT_INNER};
        background: ${({ theme }) => theme.colors.black};
    }
    
    & > * {
        z-index: 1;
    }
`;

export const Cover = styled.div`
    position: relative;
    clip-path: ${CLIP_PATH_DEFAULT};
    height: ${({ theme }) => theme.spacing['3xl']};
    width: 100%;
`;

export const StyledImage = styled(Image)`
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