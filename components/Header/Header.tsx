'use client';

import Image from 'next/image';
import { useAtom } from 'jotai';
import { Stats } from '@/components';
import { StatsType } from '@/types';
import { useTheme } from 'styled-components';
import { expAtom, goldAtom } from '@/store';
import {
    AccountInfoWrapper,
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
            <Image src="/logo.svg" alt="header-logo" height={35} width={285} />

            <AccountInfoWrapper>
                <Stats type={StatsType.gold} value={gold} color={theme.colors.gold} />
                <SquareDivider />
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