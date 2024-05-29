import { useRouter } from 'next/router';
import { fetchQuest, fetchQuests } from '@/services/api';
import { QuestCard } from '@/components';

type PageProps = {
    quest: Quest;
};

type GetStaticPropsPayload = {
    params: {
        questSlug: string;
    };
};

export default function QuestPage({ quest }: PageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return <QuestCard quest={quest} />;
}

export async function getStaticPaths() {
    const quests = await fetchQuests();

    const paths = quests.map((quest) => ({
        params: { questSlug: quest.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsPayload) {
    const quest = await fetchQuest(params.questSlug);
    return { props: { quest } };
}