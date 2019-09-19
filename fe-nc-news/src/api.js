import axios from 'axios';

const request = axios.create({
    baseURL: "https://brookesjw1-nc-news.herokuapp.com/api"
})

export const getArticles = (topic, sort_by, order, p=1) => {
    return request
    .get("/articles", {
        params: {
            topic,
            sort_by,
            order,
            limit: p * 10
        }
    })
    .then(({ data }) => {
        return data;
    })
}

export const getUsers = () => {
    return request
    .get("/users")
    .then(({ data }) => {
        return data.users;
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

export const getComments = (id, p = 1) => {
    return request
    .get(`/articles/${id}/comments`, {
        params: {
            limit: p * 10
        }
    })
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

export const deleteComment = (comment_id) => {
    return request
    .delete(`/comments/${comment_id}`)
}

export const patchVotes = (endpoint, voteDiff, id) => {
    return request
    .patch(`/${endpoint}/${id}`, { inc_votes: voteDiff })
}

export const fetchUser = (username) => {
    return request
    .get(`/users/${username}`)
    .then(({ data }) => {
        return data.user;
    })
}
