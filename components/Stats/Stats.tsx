'use client'

import { ReactNode } from 'react';
import { StatsType } from '@/types';
import { Container } from './Stats-styled';
import Image from 'next/image';

type StatsProps = {
    type: StatsType;
    color?: string;
    value: number;
};

const ICON_SIZE = 24;

const iconsMap: Record<StatsType, ReactNode> = {
    [StatsType.exp]: <Image src="/assets/exp.png" alt="Exp" width={ICON_SIZE} height={ICON_SIZE} />,
    [StatsType.gold]: <Image src="/assets/gold.png" alt="Gold" width={ICON_SIZE} height={ICON_SIZE} />,
};

export default function Stats({ type, value, color }: StatsProps) {
    return (
        <Container color={color}>
            {iconsMap[type]}
            {value}
        </Container>
    );
}
