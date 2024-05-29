'use client'

import { QuestCardWrapper, StyledCard } from './QuestCard-styled';

type QuestCardProps = {
    quest: Quest;
};

export default function QuestCard({ quest }: QuestCardProps) {
    return (
        <QuestCardWrapper>
            <StyledCard>

            </StyledCard>
        </QuestCardWrapper>
    );
}
