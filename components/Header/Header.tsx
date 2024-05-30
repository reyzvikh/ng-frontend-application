'use client';

import Image from 'next/image';
import { useAtom } from 'jotai';
import { Stats } from '@/components';
import { StatsType } from '@/types';
import { useTheme } from 'styled-components';
import { expAtom, goldAtom } from '@/store';
import {
    AccountInfoWrapper,
    Logo,
    Avatar,
    Container,
    SquareDivider,
    StyledAvatarImage,
} from './Header-styled';

export default function Header() {
    const theme = useTheme();
    const [exp] = useAtom(expAtom);
    const [gold] = useAtom(goldAtom);

    return (
        <Container>
            <Logo>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/logo_mobile.svg" />
                    <Image
                        src="/logo.svg"
                        alt="header-logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    />
                </picture>
            </Logo>

            <AccountInfoWrapper>
                <Stats type={StatsType.gold} value={gold} color={theme.colors.gold}/>
                <SquareDivider/>
                <Stats type={StatsType.exp} value={exp} color={theme.colors.gold} />

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