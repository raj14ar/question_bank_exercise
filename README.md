# question_bank_exercise
This app is developed using node.js, express.js, and mongodb.
The purpose of this app is to develop an app in which we can insert and search questions.
There are two basic API's for this purpose,
1. http://localhost:8000/insert
2. http://localhost:8000/search

To run the project we have to first clone the code into our vscode and then use 'npm install' command to install the necessary packages, after that, we can use either 'node index.js' or 'nodemon index.js'.

I have tried to cover all the possible basic validations
According to the question I have defined some of the enums for the Topic and Tags field other than that no other value for Topic and Tags will be acceptable
Enum for Topic is ["qualifying-criteria", "top-colleges", "exams", "finance"] and 
Enum for tags is [ "stanford-university", "usa", "admission", "engineering", "top", "medicine", "law", "australia"]
As specified in the question Query can be an only string so it can accept an only string, it will not accept the number or any other datatype.
Extra space between the Query will not be considered as a new Question, it will give a question already exists.
