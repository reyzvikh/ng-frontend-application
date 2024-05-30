'use client'

import { MouseEventHandler, PropsWithChildren } from 'react';
import { Variant } from '@/types';
import { ButtonText, StyledButton } from './Button-styled';

type ButtonProps = {
    variant?: Variant;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
    variant = 'primary',
    children,
    onClick,
}: PropsWithChildren<ButtonProps>) {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            <ButtonText>{children}</ButtonText>
        </StyledButton>
    );
}
