import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:3000',
});

export const fetchQuests = () => client.get<Quest[]>('/api/quests').then(res => res.data);

export const fetchQuest = (questSlug: string) =>
    client.get<Quest>('/api/quest', { params: { questSlug } }).then((res) => res.data);