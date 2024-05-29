'use client'

import { Chip } from '@/components';
import { useRouter } from 'next/navigation';
import { DifficultyMeter } from './DifficultyMeter';
import { Rewards } from './Rewards';
import {
    Title,
    Cover,
    Container,
    ChipsWrapper,
    QuestDetails,
    GeneralInformationContainer,
} from './QuestsListItem-styled';

type QuestCardProps = {
    data: Quest;
};

export default function QuestsListItem({ data }: QuestCardProps) {
    const router = useRouter();

    return (
        <Container onClick={() => router.push(`/quests/${data.slug}`)}>
            <Cover src={data.cover} alt={data.title} />
            <QuestDetails>
                <GeneralInformationContainer>
                    <Title>{data.title}</Title>
                    <ChipsWrapper>
                        <Chip icon="/assets/solidity.svg">{data.language.label}</Chip>
                        <DifficultyMeter difficulty={data.difficulty} />
                        <Chip>{data.type.label}</Chip>
                    </ChipsWrapper>
                </GeneralInformationContainer>
                <Rewards {...data.rewards} />
            </QuestDetails>
        </Container>
    );
}