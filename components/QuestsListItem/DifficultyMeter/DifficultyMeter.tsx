'use client'

import { Chip } from '@/components';
import { Container, SwordIcon } from './DifficultyMeter-styled';

type DifficultyMeterProps = {
    difficulty: Difficulty;
};

const MAX_DIFFICULTY = 5;

export default function DifficultyMeter({ difficulty }: DifficultyMeterProps) {
    return (
        <Chip>
            <Container>
                {[...Array(MAX_DIFFICULTY)].map((el, index) =>
                    <SwordIcon
                        key={index}
                        src="/assets/sword.svg"
                        alt={`difficulty-${index + 1}`}
                        height={12}
                        width={12}
                        $highlighted={index + 1 <= difficulty}
                    />
                )}
            </Container>
        </Chip>
    );
}
