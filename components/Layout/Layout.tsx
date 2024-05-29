'use client'

import { Header } from '@/components';
import { PropsWithChildren } from 'react';
import { LayoutContainer } from './Layout-styled';

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    );
}