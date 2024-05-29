'use client';

import { Stats } from '@/components';
import { Container } from './Rewards-styled';
import { StatsType } from '@/types';

type RewardsProps = QuestReward;

export default function Rewards({ expPoints, gold }: RewardsProps) {
    return (
        <Container>
            <Stats type={StatsType.exp} value={expPoints} />
            <Stats type={StatsType.gold} value={gold} />
        </Container>
    );
}
