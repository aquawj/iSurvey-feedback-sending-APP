iSurvey APP
-

This project is to build a web application for collecting feedbacks from user's clients via emails.

Run the project
-

Heroku(production):

https://feedback-sender.herokuapp.com/

Local(development):

"npm run dev"

Functions
-
-Login/logout with Google: click 'login with google'/'logout' link on the top right, or click 'login' button in the middle.

-Add Credit: to get access to our app, you need to pay to get the credits.
It's under Strip's test mode, so you can just input information using 
test data: make sure to use card number '4242424242424242'(not your own credit card).

-Add surveys: click the button on the bottom right to add your own surveys. 
 You can add as many surveys as you wish.

-Create a survey: input in the area to customize your survey content. To test, 
use your own email address as recipient(in fact, it should be a list of customer's emails). Then you will receive the email from us.

-Review your survey: when you finish creating survey, you can review it. If all content are
 correct, just click 'send survey'. You will then see the email in your inbox.
 
-Show your survey history: you can review all your created surveys here with summary of 
customer's feedback (like how many hits; how many positive/negative feedbacks)

tech stack:
-
NodeJS/Express, React/Redux, MongoDB/Mongoose

PassportJS, nodemon, Stripe, SendGrid, webhook

Heroku


Parts finished:
-
Google authentication login in server side;

Connected MongoDB to store users;

Seperated develop and production environment;

Created React components;

Created routes;

Created Actions and Reducers using Redux;

Using Stripe API to handle payments;

Allowed users to create surveys;

Imported sendgrid to help sending and tracking Emails;

Webhook;
