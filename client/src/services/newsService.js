import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/news'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (newsId) => {
    const result = await request.get(`${baseUrl}/${newsId}`, );

    return result;
}

export const create =  async (newsData) => {
    const result = await request.post(baseUrl, newsData);

    return result;
};

export const edit =  async (newsId, newsData) => {
    const result = await request.put(`${baseUrl}/${newsId}`, newsData);

    return result;
};
