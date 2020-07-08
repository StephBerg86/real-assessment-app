### Self assessment

| Section             | Max Points | Self  | Evaluator |
| ------------------- | ---------- | ----- | --------- |
| 1 Navigation        | 5          | 5/5   | 0/5       |
| 2 Home page buttons | 6          | 6/6   | 0/6       |
| 3 About us          | 9          | 0/9   | 0/9       |
| 4 Book viewing      | 10         | 10/10 | 0/10      |
| 5 View listings     | 15         | 0/15  | 0/15      |
| 6 Express server    | 7          | 0/7   | 0/7       |
| 7 Styling           | 2          | 2/2   | 0/2       |
| 8 Finishing up      | 6          | 6/6   | 0/6       |
| Total               | 60         | 0/60  | 0/60      |

| 1. Navigation - Criteria                                                 | Points | Self | Evaluator |
| ------------------------------------------------------------------------ | ------ | ---- | --------- |
| 3 Static Routes are implemented using react router                       | 1      | 1    |
| There is 1 dynamic route implemented with a route parameter for language | 1      | 1    |
| Each route renders a different component                                 | 1      | 1    |
| A navbar can be used to navigate on all pages                            | 1      | 1    |
| The navbar indicates what page you are on                                | 1      | 1    |
| Total                                                                    | 5      | 5    |

| 2. Home page buttons - Criteria                                                    | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------- | ------ | ---- | --------- |
| 2 Buttons link to the correct pages                                                | 1      | 1    |           |
| A select input is displayed on the page, with 4 options for languages              | 1      | 1    |           |
| Selecting an option changes the text on the buttons                                | 1      | 1    |           |
| Translation of the buttons works correctly for all 4 languages                     | 1      | 1    |           |
| The `About us` button links to a different path depending on the language selected | 2      | 2    |           |
| Total                                                                              | 6      | 6    |           |

| 3. About us - Criteria                                                        | Points | Self | Evaluator |
| ----------------------------------------------------------------------------- | ------ | ---- | --------- |
| Agents are displayed with their name, image, motto and email                  | 1      |      |           |
| The data for agents is fetched from the api, not hardcoded                    | 2      |      |           |
| Only agents that speak the language specified in the path are displayed       | 2      |      |           |
| Which agents to display is determined using Array.filter, not hardcoded       | 2      |      |           |
| The buttons link to the correct pages                                         | 1      |      |           |
| The text on the 2 buttons is translated to the language specified in the path | 1      |      |           |
| There is a warning in the console regarding "key" props                       | -1     |      |           |
| The value of the language is hardcoded, not dynamically taken from the path   | -1     |      |           |
| Total                                                                         | 9      |      |           |

| 4. Book viewing - Criteria                                                 | Points | Self | Evaluator |
| -------------------------------------------------------------------------- | ------ | ---- | --------- |
| A form is displayed on the schedule a view page                            | 1      | 1    |           |
| The form has inputs for name, email, phone                                 | 0.5    | 0.5  |           |
| The form has a select input for listing address, and a date input for date | 0.5    | 0.5  |           |
| The state of the form is controlled using React useState hook(s)           | 2      | 2    |           |
| When the form is submitted, the user input for all form fields is logged   | 2      | 2    |           |
| When the form has been submitted, we show a success message to the user    | 2      | 2    |           |
| The options for listing addresses are fetched from the api, not hardcoded  | 2      | 2    |           |
| The success message is an alert, prompt or confirm popup                   | -1     | 0    |           |
| There is a warning in the console regarding "key" props                    | -1     | 0    |           |
| Submitting the form refreshes the page                                     | -2     | 0    |           |
| Total                                                                      | 10     | 10   |           |

| 5. View listings - Criteria                                          | Points | Self | Evaluator |
| -------------------------------------------------------------------- | ------ | ---- | --------- |
| The address, price, m2, bedRooms, is displayed for all listings      | 1      |      |           |
| The data for each listing is displayed using a separate component    | 2      |      |           |
| The data is displayed using .map                                     | 1      |      |           |
| There is a warning in the console regarding "key" props              | -1     |      |           |
| Listings are sorted by priceEuro                                     | 1      |      |           |
| The data is fetched from the api, not hardcoded                      | 1      |      |           |
| There are 2 sliders, one for budget & one for floor space            | 1      |      |           |
| The slider for budget has a min and max value                        | 0.5    |      |           |
| The slider for floor space has a min and max value                   | 0.5    |      |           |
| Moving a slider for budget filters listings which are too expensive  | 2      |      |           |
| Moving a slider for floor space filters listings which are too small | 2      |      |           |
| The properties are filtered using something other than .filter       | -2     |      |           |
| The min and max values for the sliders are dynamic, not hardcoded    | 3      |      |           |
| Total                                                                | 15     |      |           |

| 6. Express server - Criteria                                                                                   | Points | Self | Evaluator |
| -------------------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| There is a file called server.js & a package.json, in your server repository                                   | 0.5    |      |           |
| package.json contains a script called `server`, which runs the server.js file with node                        | 0.5    |      |           |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon                 | 0.5    |      |           |
| running server.js starts an express server which listens on port 4000                                          | 1      |      |           |
| Requests to http://localhost:4000/listings get a response of an array with 10 listings                         | 1      |      |           |
| Requests to http://localhost:4000/agents get a response of an array of 2 agents                                | 1      |      |           |
| Requests to http://localhost:4000/agents/:language get a response of an array of agents speaking that language | 2.5    |      |           |
| More than 1 route is used to implement http://localhost:4000/agents/:language                                  | -1.5   |      |           |
| Total                                                                                                          | 7      |      |           |

| 7. Styling - Criteria                                                  | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Student has applied at least 5 style rules                             | 1      | 1    |           |
| Styles are split up across at least 2 css files created by the student | 1      | 1    |           |
| Total                                                                  | 2      | 2    |           |

| 8. Finishing up - Criteria                                                       | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      | 2    |           |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      | 2    |           |
| Student has committed at least once per section                                  | 1      | 1    |           |
| Student has pushed their repository using git                                    | 1      | 1    |           |
| Total                                                                            | 6      | 6    |           |
