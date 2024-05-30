'use client'

import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { StyledChip } from './Chip-styled';

type ChipProps = {
    icon?: string;
};

export default function Chip({ icon, children }: PropsWithChildren<ChipProps>) {
    return (
        <StyledChip>
            {icon && <Image src={icon} alt="icon" width={18} height={18} />}
            {typeof children === 'string' ? <span>{children}</span> : children}
        </StyledChip>
    );
}