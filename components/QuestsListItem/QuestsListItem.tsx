'use client'

import { Chip, DifficultyMeter } from '@/components';
import { useRouter } from 'next/navigation';
import { Rewards } from './Rewards';
import {
    Title,
    Cover,
    Container,
    ChipsWrapper,
    QuestDetails,
    StyledImage,
    GeneralInformationContainer,
} from './QuestsListItem-styled';

type QuestCardProps = {
    data: Quest;
};

export default function QuestsListItem({ data }: QuestCardProps) {
    const router = useRouter();

    return (
        <Container onClick={() => router.push(`/quests/${data.slug}`)}>
            <Cover>
                <StyledImage
                    src={data.cover}
                    alt={data.title}
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
            </Cover>
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