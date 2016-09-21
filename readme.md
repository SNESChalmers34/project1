Approach:
My approach to this project was starting with a basic layout (only html, no css) of how I thought I wanted the game to look. I wanted to keep html to a minimum and work primarily with JavaScript and jQuery.

Installation:
Then I started on the logic and after a little while came to the conclusion that arrays of objects was the best way to write the code. Originally I had a property with the question, then created "choices:[]" with an object for each answer with a property of 'true' or 'false'. Then I learned I could just make an array with all the answers as strings, and set a property "answer" to the index of the choices array. I used jQuery to place the items in the array in the correct spot and used 'var index = 0' and 'index++' to cycle through the questions. I set the answer divs to cycle through index when one was clicked. I then created a counter for the score, +1 for correct answers, nothing for incorrect answers. I attached audio files to the correct and incorrect answers.

Unsolved problems:
I am trying to get my leaderboard working but I cannot find my way through localStorage and I cannot figure out how to restart the game without refreshing the entire page.

(must git add .)

User Stories:
As a user, I should be able to differentiate between questions and answers
As a user, I should be able to choose my answer just by clicking it
As a user, I should be able to keep track of my score
As a user, I should be able to restart the game
As a user, I should be able to understand the game has ended
