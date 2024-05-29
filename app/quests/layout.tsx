import { PropsWithChildren } from 'react';
import { Layout } from '@/components';

export default function QuestsLayout({ children }: PropsWithChildren<{}>) {
    return <Layout>{children}</Layout>;
}