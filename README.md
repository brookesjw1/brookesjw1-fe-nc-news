# Northcoders News (Front-end)

## General info

The aim of this project is to build the Front End for Northcoders News. Northcoders News is designed to be similar in function to internet message boards such as Reddit, allowing users to interact by posting comments and voting up or down on other users' posts.

## Instructions on how to run locally

1. Clone the repo

```bash
git clone https://github.com/brookesjw1/brookesjw1-fe-nc-news
```

2. Navigate to the correct folder

```bash
cd brookesjw1-fe-nc-news/fe-nc-news
```

3. Install dependencies

```bash
npm install
```

4. You can now run the app locally

```bash
npm start
```

## User actions

The home page consists of a list of articles which may be filtered by topic and sorted by date created, comment count and the number of votes each article has received. The user may also vote the article up or down on this page.

When an article is clicked the user is taken to the single article page in which the article body is displayed along with any comments associated. In order to post a comment a user must be selected from the dropdown list at the top.

Once selected, a text box displays for the user to type in their comment and this must be completed in order for the comment to be posted.

Individual comments can also be voted up or down and once logged in a 'Delete Comment' button will also appear for any comments authored by the selected user.

## Links

Link to deployed site - (https://brookesjw1-fe-nc-news.netlify.com/)

Link to repo - (https://github.com/brookesjw1/brookesjw1-fe-nc-news)

Link to back-end repo - (https://github.com/brookesjw1/brookesjw1-nc-news)

Link to back-end API - (https://brookesjw1-nc-news.herokuapp.com/api/)

## Dependencies

@reach/router: 1.2.1,

axios: 0.19.0,

react: 16.9.0,

react-dom: 16.9.0,

react-scripts: 3.1.1