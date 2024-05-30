import Image from 'next/image';
import styled from 'styled-components';
import { cinzel } from '@/styles/GlobalStyles';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing['2xl']};
    height: ${({ theme }) => theme.spacing['3xl']};
    width: 100%;
    color: ${({ theme }) => theme.colors.white};

    @media only screen and (max-width: 768px) {
        padding: 2.5%;
    }
`;

export const Logo = styled.div`
    position: relative;
    width: 285px;
    height: 35px;

    @media only screen and (max-width: 768px) {
        width: 35px;
        height: 35px;
    }
`;

export const AccountInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['4xs']};
`;

export const StatsItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['4xs']};
    font-family: ${cinzel.style.fontFamily};
    color: ${({ theme }) => theme.colors.gold};
`;

export const SquareDivider = styled.div`
    width: ${({ theme }) => theme.radius.m};
    height: ${({ theme }) => theme.radius.m};
    background: ${({ theme }) => theme.colors.lightBrown};
    transform: rotate(45deg);
    font-size: 14px;
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing['5xs']};
    border-radius: 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.lightBrown}`};
`;

export const StyledAvatarImage = styled(Image)`
    border-radius: 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.gold}`};
`;
