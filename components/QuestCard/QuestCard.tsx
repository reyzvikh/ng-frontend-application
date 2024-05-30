'use client';

import { useAtom } from 'jotai';
import { StatsType } from '@/types';
import { expAtom, goldAtom } from '@/store';
import { useRouter } from 'next/navigation';
import { Button, Chip, DifficultyMeter, Stats } from '@/components';
import {
    Actions,
    Cover,
    Description,
    DetailsBlock,
    DetailsWrapper,
    QuestCardWrapper,
    RewardsBlock,
    StyledCard,
    Title,
} from './QuestCard-styled';

type QuestCardProps = {
    quest: Quest;
};

export default function QuestCard({ quest }: QuestCardProps) {
    const router = useRouter();
    const [exp, setExp] = useAtom(expAtom);
    const [gold, setGold] = useAtom(goldAtom);

    const applyReward = (reward: QuestReward) => {
        setGold(gold + reward.gold);
        setExp(exp + reward.expPoints);
    };

    return (
        <QuestCardWrapper>
            <StyledCard>
                <Cover src={quest.cover} alt={quest.slug} />
                <Title>{quest.title}</Title>

                <DetailsWrapper>
                    <DetailsBlock>
                        <Chip icon="/assets/solidity.svg">{quest.language.label}</Chip>
                        <DifficultyMeter difficulty={quest.difficulty} />
                        <Chip>{quest.type.label}</Chip>
                    </DetailsBlock>
                    <RewardsBlock>
                        <Stats type={StatsType.exp} value={quest.rewards.expPoints} />
                        <Stats type={StatsType.gold} value={quest.rewards.gold} />
                    </RewardsBlock>
                </DetailsWrapper>

                <Description>{quest.description}</Description>

                <Actions>
                    <Button variant="secondary" onClick={() => router.push('/quests')}>
                        Go Back
                    </Button>
                    <Button variant="primary" onClick={() => applyReward(quest.rewards)}>
                        Airdrop Rewards To The Guardian
                    </Button>
                </Actions>
            </StyledCard>
        </QuestCardWrapper>
    );
}
