# Multi-choice home assignment

You can choose one of the following projects to implement. 

## Home Automation

Write a Single-Page JavaScript application (SPA) that is simulating house automation, that will allow remote clients (iPad, browser, web app etc) to monitor and control home appliances.

For example, pressing a button on a control panel would visually:
- Turn on/off a light;
- Change the temperature (+/-);
- Open/close the curtains;
etc.

Constraints:
- The solution has to be *extensible* (there might be many rooms, with different numbers and sets of appliances)
- The solution must be documented, so that we can develop our own additional controllers/components that react to events;
- The application must have a HTTP-based API interaction. For example, the heating component retrieves the current temperature from the `server` and also sends the desired one back to the `server` via API.
- You can use a static file with data for simplicity or mock the server data responses. If you choose to use a local server, make sure we know how run it locally
- Use vanilla JS or framework of your choice. **We prefer React.js**
- TypeScript is also acceptable.
- It will be viewed in 2 major browsers of your choice.


## SPA - Github Integration

Write a Single Page Application (in JavaScript) that retrieves data from Github endpoints and displays it.
The application will be a dashboard application, which will display statuses of the `selected` GitHub projects.

The `selected` projects will be added/deleted by the user. To add a project, a user should be able to use search with project name. The list of the projects can be stored at local storage for the next visit.

Expected functionality:
- Search and add new GitHub projects to the project list. Remove project from the project list.
- List the projects in a single page. The list can contain some summaries (project description, project link etc.)
- Display project details such as latest activities (last commits, last issues etc.) or general status (open PR count, open issue count etc.). Each project detail page should be bookmarked on its own.

Constraints:
- The solution must be documented so that anyone can develop additional features on top of it. 
- The documentation must include `how to build` section.
- You have to supply both code and deployable package. You can deploy it to the GitHub pages or somewhere else.
- Responsive design is a bonus.
- We prefer React.js but feel free to use any other javascript framework.

Resources:
- https://developer.github.com
- https://developer.github.com/v3/
- https://developer.github.com/v4/

------

# Bonus Tasks

- Add your design decisions to DOC.md file.
- Implement a Spring Boot, Node.js or Deno backend for 'Home Automation' assignment
- Document the API in Swagger or API blueprint
- Create an adapter for some existing IoT platform
- Attach a Figma design
- Write the logic in pure functional style

# Submission

Please open a Pull/Merge request to this repository with everything you have prepared.

Make sure that the project is building correctly.
Make sure that all tests are passing.
Prepare necessary instructions to run your application in DOC.md file. Also include references for used libraries, frameworks, code snippets.
If you have any questions, please send us an email, we'll get back to you as soon as possible.
You have 7 days to complete this task.

# Evaluation Criterias

- Code quality
- Applying Best Practices and OOP principles
- Correctness of the business logic and its compliance with the requirements
- Unit Tests
- Clean commit history (https://github.com/trein/dev-best-practices/wiki/Git-Commit-Best-Practices)
 
