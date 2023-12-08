import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/news'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (newsId) => {
    const result = await request.get(`${baseUrl}/${newsId}`,);

    return result;
}

export const getNewsByUserId = async (userId) => {
    const result = await request.get(baseUrl);

    return result.filter(news => news._ownerId === userId)
};

export const getLatest = async () => {
    const result = await request.get(`${baseUrl}?offset=0&pageSize=3&sortBy=_createdOn%20desc`);

    return result;
}

export const create = async (newsData) => {
    const result = await request.post(baseUrl, newsData);

    return result;
};

export const edit = async (newsId, newsData) => {
    const result = await request.put(`${baseUrl}/${newsId}`, newsData);

    return result;
};

export const remove = async (gameId) => request.remove(`${baseUrl}/${gameId}`);
