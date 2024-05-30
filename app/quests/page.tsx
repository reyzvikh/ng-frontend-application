'use client'

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { QuestsListItem } from '@/components';
import { fetchQuests } from '@/services/api';

const StyledRoot = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: ${({ theme }) => theme.spacing['3xs']};
    justify-content: space-evenly;

    margin: 0 ${({ theme }) => theme.spacing['6xl']} ${({ theme }) => theme.spacing['3xl']};
    padding: ${({ theme }) => theme.spacing.m};
    height: 80vh;
    border: ${({ theme }) => `2px solid ${theme.colors.lightBrown}`};
    background: ${({ theme }) => theme.colors.black};

    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media only screen and (max-width: 1440px) {
        margin: 0 ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.m};
    }

    @media only screen and (max-width: 768px) {
        margin: 0 ${({ theme }) => theme.spacing['6xs']} ${({ theme }) => theme.spacing['3xs']};
    }
`;

export default function Page() {
    const { isLoading, data = [] } = useQuery({
        queryKey: ['quests'],
        queryFn: fetchQuests,
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <StyledRoot>
            {data.map((quest) => <QuestsListItem key={quest.slug} data={quest} />)}
        </StyledRoot>
    );
}
