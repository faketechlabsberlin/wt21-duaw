# DUAW

## About
\
Welcome to the DUAW project! DUAW stands for visit, get together and communicate in Bisaya language and is also an abbreviation for the different bootcamp tracks of TechLabs: 
* **D**ata Science
* **U**X Design
* **A**rtificial Intelligence, and 
* **W**eb Development! 

When we started our graduation project, we saw that there is not yet a place where all the projects are presented. Interviewing our TechLabs mentors indeed revealed that often final projects "fizzle out" after being finished, and same goes for the students that created them. This defined our mission: Creating a platform where the projects can be showcased in a nicely structured and visualized way, so students can proudly present the skills they accomplished. We also want to strengthen the TechLabs community by allowing project members to provide their contact data (e.g. their LinkedIn site), by upvoting other projects and even letting interested people contact the team for suggestions, feedback or collaboration. Additionally, potential future TechLabs students see which awesome graduation projects they would be able to build after taking a bootcamp. 

Technically, DUAW can be understood as a wrapper for GitHub repos. The project teams have to add a few files into the repository as explained on the DUAW website, afterwards notify the DUAW team for the project to get uploaded. The data is then fetched via the GitHub API and transformed into a new page for showcasing this project.

## UX links
First of all, our final result 😊: \
[Clickable Figma prototype](https://www.figma.com/proto/YIKKTJPgyOL0AOu9MItDDk/DUAW?page-id=0%3A1&node-id=637%3A1337&viewport=241%2C48%2C0.12&scaling=min-zoom&starting-point-node-id=637%3A1337&show-proto-sidebar=1) and [commented Figma prototype](https://www.figma.com/file/YIKKTJPgyOL0AOu9MItDDk/DUAW?node-id=0%3A1)

Also, find below all documents and files created from us during the entire UX process!
- User surveys for [TL students](https://docs.google.com/document/d/1qHhPU9hWyBHcklyV1ASu-vVzAiHXyvMXJT3wriP04ko/edit?usp=sharing) and [TL track leads](https://docs.google.com/document/d/1ASI_R3cq-Efktr49WjQjQpvFyVTd--TmAgSAiS8vzaY/edit?usp=sharing)
- User survey results for the [TL students](https://docs.google.com/document/d/1hc9gWdXALDiOBOawmYy6WQGOhNzg-44OpbcOWN-aBxQ/edit?usp=sharing) and [TL track leads]( https://docs.google.com/document/d/1E_-Be6OPRU1WA1nBYqhbamTS2DjbQRAQp2MP1njBmWw/edit?usp=sharing)
- Empathy Maps for the [TL students](https://drive.google.com/file/d/162-10k49VqOnX1cU5_-lGVlL157cbBEL/view?usp=sharing) and [TL track leads](https://drive.google.com/file/d/1yzv_YbAk-wFd3cVpcoJQXFfP4Jgr7sdk/view?usp=sharing)
- [User Interviews and their results](https://docs.google.com/document/d/1YYhvwDhfT1byrum8QgXy8gAq47tGknPDBAO0Xvixtr8/edit?usp=sharing)
- [Personas and User Stories](https://miro.com/app/board/uXjVORCXl_Y=/?invite_link_id=683122939948)
- [Brainstorming session](https://miro.com/app/board/uXjVOZ1PSc0=/?invite_link_id=872307452811)
- [Project Definition](https://docs.google.com/document/d/180n-NfzAqazW5d7ODMMTNZZb7mUgTDWCyop7Xoqt5EE/edit?usp=sharing)
- [Features and Content](https://docs.google.com/document/d/1uy0pZmLog8HhA54yZ-aRwirAz2wS59DEfvu6pgB2sp0/edit?usp=sharing)
- [Information Architecture](https://miro.com/app/board/uXjVOZ1PSc0=/?invite_link_id=561063932185)
- [User Flows](https://miro.com/app/board/uXjVORCXl_Y=/?invite_link_id=683122939948)
- [Wireframes](https://miro.com/app/board/uXjVOZ1PSc0=/?invite_link_id=561063932185)
- [User testing results](https://docs.google.com/document/d/17SyAGu8maZM9Z61j-m7nZV6bSLKWivODYx8zAYvIpk0/edit?usp=sharing)

## Web App

DUAW is a web app, created with React. and styled with MUI component library.

## Running the project locally

1- Install node.js on your machine through this link: https://nodejs.org/en/

2- After clonning the repository, and having the complete project files saved in a folder on your computer, open the project folder with your desired editor.

3- Enter the project folder in your Terminal `cd my-app` 

5- Run `npm start` to open the App.

4- At this point normally the app should automatically open in your browser. If not open a browser tab with this link: http://localhost:3000/ to see the app.

5- To close the React App type `CTRL-C` 

6- To install MUI used for styling run: `npm install @mui/material @emotion/react @emotion/styled`


## Update the recommendation model
To update the recommendations for display on the website:
1. The following python packages are needed:
   - `pandas`, `numpy`, `requests`, `json`
   - ML: `from sentence_transformers import SentenceTransformer` ,`from sklearn.metrics.pairwise import cosine_similarity`
2. execute [`recomender-system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomender-system.ipynb) (in `Jupyter Notebook`)
3.  update the content of the `recomendations.json` file:  [recomendations.json](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/recomendations.json)
4. the last step will require a pull request and merging by a member of the DUAW team

For further details please refer to the Data Science documentation: [`DS-Readme.md`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/README.md)

## Inclusion of a project for display on DUAW website
The current prototype is fetching data from an external github organisation: [https://github.com/faketechlabsberlin](https://github.com/faketechlabsberlin).

To be presented on the DUAW website, the following steps need to be undertaken in the github repository of the project:
1. Under `Settings`: the `about` section as well as `topics` need to be filled.
2. To provide further information about the team, the [`project-information.json`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/project-information.json) file needs to be downloaded, updated with required information and added to first page of the repository.
3. A project image (JPG format) needs to be uploaded at the first page of the repository and called `project-image.jpg` 
4. Finally the entire repository needs to be forked to [https://github.com/faketechlabsberlin](https://github.com/faketechlabsberlin)

## Team members

- UX | David
- UX | Celine
- UX | Constantine
- WD | Javad
- DS | Constanze

## Mentor
- Bernardo

## Tech Stack
- Git & GitHub
- React
- HTML
- CSS
- JavaScript
- Python 3
- Jupyter Notebook
