export {};

declare global {
    type Difficulty = 1 | 2 | 3 | 4 | 5;

    type QuestReward = {
        expPoints: number;
        gold: number;
    };

    type Quest = {
        cover: string;
        description: string;
        difficulty: Difficulty;
        rewards: QuestReward;
        title: string;
        slug: string;
        type: {
            label: string;
            id: string;
        };
        language: {
            label: string;
            id: string;
        };
    };
}
