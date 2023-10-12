# NC News App

## Link to hosted version

https://dg-react-news-app.netlify.app/

## Link to Backend Repo

https://github.com/Damog83/BE-NCNews

# App Description

Nc-news is a news application designed to allow users to view, read and interact with news articles.  The apllication is built using react and is the view aspect of a mvc design pattern working with a backend api which handles the model and controller portions of the application.  Upon first loading the application the user is presented with a list of articles.  The user has access to a nav bar where they can filter the articles based on topic and sort options of date, votes and comment count. Upon selecting an article the user will be able to read the article in full and view any comments left by other users associated with that article.

To gain extra functionality the user can go to the sign in page in the nav bar and sign in as a user.  To allow for ease of use the sign in page simply asks of the user to select a username of an existing user from the select menu and click the sign in button.  Upon selecting a user the app will automatically navigate the user back to the previous page.  Once signed in the user gains the functionaility of being able to vote on articles and leave a comment.  The vote is limited to one vote per article although the user has the ability to change their vote by voting down if they previously voted up or up if they previously voted down.

They will also have access to a text field on each article which will allow the user to add a comment to their article with comments ordered by most recent at the top.  Within the comments the user also has the ability to delete any comments connected to their own username but not of those belonging to another user. If the user wishes to sign out they can do so using the sign out page which has a link in the nav bar which has replaced the sign in link.  Once signed out the user will return to standard functionality and will be denied access to voting, adding comments and deleting comments of their own and the sign out nav link will now be replaced with the sign in link again.  The app has been designed with a mobile first approach.

# Setup

## To clone the repo locally

    $ git clone https://github.com/Damog83/nc-news.git

## To install dependencies

    $ npm install

## To run app locally

    $ npm run start

## Minimum node version

node v17.3.0
