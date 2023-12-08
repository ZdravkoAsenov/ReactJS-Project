import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (newsId) => {
    const query = new URLSearchParams({
        where: `newsId="${newsId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result.filter(comment => comment.newsId === newsId)
};

export const create = async (newsId, text) => {
    const newComment = await request.post(baseUrl, {
        newsId,
        text,
    });

    return newComment;
};