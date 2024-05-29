'use client';

import Image from 'next/image';
import { Stats } from '@/components';
import { AccountInfoWrapper, Avatar, Container, SquareDivider, StyledAvatarImage } from './Header-styled';
import { StatsType } from '@/types';
import { useTheme } from 'styled-components';

export default function Header() {
    const theme = useTheme();

    return (
        <Container>
            <Image src="/logo.svg" alt="header-logo" height={35} width={285} />

            <AccountInfoWrapper>
                <Stats type={StatsType.gold} value={1000} color={theme.colors.gold} />
                <SquareDivider />
                <Stats type={StatsType.exp} value={2000} color={theme.colors.gold} />

                <Avatar>
                    <StyledAvatarImage
                        src="/assets/avatar.png"
                        alt="avatar"
                        height={48}
                        width={48}
                    />
                </Avatar>
            </AccountInfoWrapper>
        </Container>
    );
}