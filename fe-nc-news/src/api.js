import axios from 'axios';

const request = axios.create({
    baseURL: "https://brookesjw1-nc-news.herokuapp.com/api"
})

export const getArticles = (topic, sort_by, order) => {
    return request
    .get("/articles", {
        params: {
            topic,
            sort_by,
            order
        }
    })
    .then(({ data }) => {
        return data.articles;
    })
}

export const getTopics = () => {
    return request
    .get("/topics")
    .then(({ data }) => {
        return data.topics;
    })
}

export const getArticleByID = (id) => {
    return request
    .get(`/articles/${id}`)
    .then(({ data }) => {
        return data.article;
    })
}

export const getComments = id => {
    return request
    .get(`/articles/${id}/comments`)
    .then(({ data }) => {
        return data.comments;
    })
}

export const sendComment = (id, author, body) => {
    return request
    .post(`/articles/${id}/comments`, { author, body })
    .then(({ data }) => {
        return data.comment;
    })
}