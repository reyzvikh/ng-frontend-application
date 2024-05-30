import styled from 'styled-components';
import { CLIP_PATH_DEFAULT } from '@/constants/clipPath';
import { cinzel, interRegular } from '@/styles/GlobalStyles';

export const QuestCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['2xs']};
    border: ${({ theme }) => `2px solid ${theme.colors.lightBrown}`};
    background: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => `${theme.spacing['2xs']} ${theme.spacing['3xs']}`};

    height: 500px;
    width: 70%;
`;

export const Cover = styled.img`
    clip-path: ${CLIP_PATH_DEFAULT};
    height: ${({ theme }) => theme.spacing['8xl']};
    width: 100%;
    object-fit: cover;
`;

export const Title = styled.span`
    font-size: 18px;
    font-family: ${cinzel.style.fontFamily};
    color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.span`
    font-size: 14px;
    line-height: 19px;
    font-family: ${interRegular.style.fontFamily};
    color: ${({ theme }) => theme.colors.lightGrey};
    flex-grow: 1;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DetailsBlock = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing['4xs']};
`;

export const RewardsBlock = styled(DetailsBlock)`
    gap: ${({ theme }) => theme.spacing['2xs']};
    margin-right: ${({ theme }) => theme.spacing['2xs']};
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
`;
