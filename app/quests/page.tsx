'use client'

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { QuestsListItem } from '@/components';
import { fetchQuests } from '@/services/api';

const StyledRoot = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
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
