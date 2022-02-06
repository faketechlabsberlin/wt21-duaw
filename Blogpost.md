# The Making of DUAW: A project made from us for all of us

DUAW started with the observation that [TechLabs](www.techlabs.org) graduation projects weren’t getting the visibility they deserve. With this in mind, the project initiator Constantine Dranganas made the hypothesis that both TechLabs graduates and the leadership team weren’t really satisfied with the documentation of projects up to that point.

Along with David Dillmann (UX), Javad Raisi (WD), Constanze Cavalier (DS) and Celine Onwubiko (UX) he went on a mission to prove this hypothesis right or wrong. This is how DUAW originated.

### What is DUAW really?

DUAW stands for the initials of the four tracks offered by Techlabs (**D**ata Science, **U**X Design, **A**rtificial Intelligence, and **W**eb Development. At the same time, it translates into _visit_, _communicating_, and _getting together_ in the Bisaya language (Austronesian languages spoken in the Philippines). The DUAW logo highlights the continuous movement of the TechLabs projects that are ever-evolving, as well as the connection of the four tracks, as they have to work together in the realization of projects.

<p align="center">
    <img alt="DUAW logo" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/ux-files/logo2.jpg" width="400" />
</p>

From all these elements, it becomes evident that the team aimed to bring to life a space for existing students, leadership teams, partners, and alumni to present and visit projects, communicate and get together.

### Which were the actual needs of the main stakeholders (TechLabs leadership team and existing students)?

DUAW sounded like a great idea but did it correspond to the needs of its designated end users?
To get an answer to this question and more, the UX team (Constantine, David, and Celine) got to work straight away. After defining the right questions for the stakeholder groups, two separate surveys were sent out to collect data. The results that came in aligned with what the team imagined originally. Empathy mapping and word clouds helped them visualize the survey results.

The results indicated that indeed, a platform like DUAW was missing for TechLabs to share with the world their impactful work and for graduates to communicate their projects and skills obtained. Both stakeholder groups could benefit from DUAW coming to life. After reaching this more concretized project goal, additional interviews were conducted with potential visitors of the DUAW platform to get further insights for the upcoming ideation session.

### But what was worth building? What features make the most sense? What could the team achieve in the given timeframe?

The next steps involved the whole DUAW team coming together to brainstorm and ideate, utilizing the stakeholder as a point of departure. A storm of ideas was condensed to the ones that were voted as the most interesting and valuable from the whole group. The team broke down the most voted ideas into five categories (Collaboration, Engagement, Presentation, Updates, Insights) and then evaluated them under impact and ease to execute.

The outcome of this project ideation session? Must do features, Could do features, Should do features, and Won’t do features.

The research phase was coming to an end, with the UX team finalizing its personas, working on user stories, flows, and information architecture while preparing for prototyping and testing.

<p align="center">
    <img alt="Personas" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/ux-files/personas.jpg" width="600" />
</p>

<p align="center">
    <img alt="Early wireframes" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/ux-files/wireframes_overview.jpg" width="600" />
</p>

# An increadible learning curve for Web development and Data Science
A lot of ideas for a nice project, but to bring them to life, a well-constructed backbone and data structure were required. This became even more challenging with a tight personal situation since Javad was the only web developer in the team, while Constanze was the only data scientist.

## Web development
A little personal story from Javad: 
The web development track was one challenge after another, and I loved it! 

It started with a large volume of materials that I had to learn in less than a couple of months ranging from Bootstrap and JS to React and APIs, just to mention some. I was already overwhelmed with that whole amount of information that I faced the complexity of putting into practice those learnings into a real-world project. And as if it was not enough I also found myself after just a week to be the only one left in the dev team. And it was a blessing, for learning more! 

In the first two weeks, I was lost. I was feeling so unprepared that left me with small optimism about the delivery of the project. But everything got better day after day by proving to myself my knowledge. I initiated the process by defining the function that will fetch the necessary milestones for developing DUAW and would return me a success. Then I mapped through these milestones, filtered them based on their priority, and invoked them one after another until I did it all.

Through this process, of course, I faced a lot of roadblocks where each one turned to valuable learning. I was alone with no backend knowledge and learned how to use the Github repository of the projects as our backend. I had countless difficulties building the logic behind our app and learned how to search for solutions, understand them and adapt them to my code with my specific purpose. I had time constraints and learned how to use other technologies such as MUI to accelerate my work, and many more. All of this would not be possible without the invaluable support of my mentor Bernardo Sunderhus. 

As a UX designer, I started this course to gain a better understanding of frontend development to be a better UX designer. However, it turned into such a fascinating experience that left me with so much joy for all I learned so far that I can only call it the start of a long journey to become a better developer every day. 

##  Data science
A little personal story from Constanze: 
After an intense academic phase it was possible to start working closely in a team on a real project. Briefly learning Data Science in the DUAW project, meant working with information that is not yet in a well defined data set, implementing a backend structure to acquire this information and building a recommendation model based on text data. 

The journey can be summarised in a few words: "That sounds very cool. I don't know how to build that… yet"

### Building a backbone and collecting data for display on DUAW Website 
Initially WD and DS needed to identify a way to collect information to be displayed on the website and since we were working without a backend, we were going to fetch everything  through the Github API https://docs.github.com/en/rest. 
Therefore we decided our "Backend" will be the well documented Github repository and clear API calls, which delivers all data and information.

<p align="center">
    <img alt="Backend Structure for DUAW project" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/Backend-DUAW.png" width="600" />
</p>

We identified the possible large data set that can be reached by the Github API, understood its elements and how we can access them. After the ideation session WD and DS understood what kind of information we would like to display, where to get this information from (Github), how the data can be provided (directly, via API and by providing further files).
For the technical details of this part please refer to the file (DS readme).

We prepared a https://github.com/faketechlabsberlin organisation and forked existing Techlabs projects there. Since some desired information cannot be provided directly it's important to add additional files that can be accessed via the API for display on the Website. In an iterative process we came up with the design for the following additional file that needs to be manually added to each repository, *project-description.json* in which the team provides further information e.g. about the members and their respective tracks. The provided JSON format that can be consumed via the API for display on the Website. 

### Recommendation system based on Project description

Initially we came up with several ideas for interesting data visualisation projects that could be displayed on an engaging Website about Techlabs graduation projects. Either giving insights about technical knowledge of participants and using the Stack Overflow Annual Developer Survey as a guiding dataset for analysis. Or giving insights about the projects displayed on the DUAW project. 

We decided to focus on the display of the real project information, as the data set might be small at the moment (12-24 projects) but as Techlabs Berlin is growing, so will the number of available projects and the available dataset. Furthermore to increase and facilitate website engagement, we decided to implement a recommendation model based on the project. Like this the user is then offered the suggestions on which projects to explore next. 

### Building a simple recommendation system based on the descriptions of the project 

Initially a manually created dataset of projects and their descriptions were used to develop the recommendation system. Exploratory data visualisation was performed (word clouds and heatmaps) to compare the results of the document's vectorisation. Vectorisation algorithms like bag of words and embedding (eg. BERT) were compared. For similarity analysis cosine similarity and Euclidean distance were evaluated. Cosine similarity was chosen for pairwise comparison. The results are then sorted and used for the recommendation system. The results of the recommendation models were further visualised as simple networks. For the final prototype similarity analysis after embedded vectorisation with BERT was implemented. 
As a future outlook further information about the projects, like project keywords, involved tracks, semesters could be used to tailor the recommended project further. 

<p align="center">
    <img alt="development of the recommendation system" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/Impressions%20on%20DS%20results.png" width="600" />
</p>
Some impressions from the development of the recommendation system: (left:  word cloud of project descriptions, right: heatmap, comparison of vectorization and similarity analysis algorithms)


### Workflow of the DUAW project from Data Science perspective

<p align="center">
    <img alt="Data Science Workflow of the DUAW project" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/Workflow-DUAW.png" width="600" />
</p>

Overall it was a very interesting project and journey and I am so glad to have been able to work closely with our web developer during the project, it was always a pleasure to talk things through. Additionally to our WD Mentor Bernardo, I would like to thank Max, David and Mattis for their input for coming up with the structure for the recommendation system.


# Final remarks
The DUAW graduation presentation was a great success, with the audience reacting with excitement and supportive comments. This proved that the DUAW team was working on a solution that can bring an immediate real-world impact. 

The goal is for DUAW to become the go-to platform for prospective TechLabs students, alumni, partners, and the TechLabs leadership team on an international scale. This is the project and community hub that can bring TechLabs to the next level and everyone is welcome to contribute to making this happen.

A big thanks to everyone who believed in this idea and supported this project from day one.
