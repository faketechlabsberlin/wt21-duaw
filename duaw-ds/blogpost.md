
# Data science
After an intense academic phase it was possible to start working closely in a team on a real project. Briefly learning Data Science in the DUAW project, meant working with information that is not yet in a well defined data set, implementing a backend structure to acquire this information and building a recommendation model based on text data. The journey can be summarised in a few words: "That sounds very cool. I don't know how build that… yet"

### Building a backbone and collecting data for display on DUAW Website 
Initially WD and DS needed to identify a way to collect information to be displayed on the website and since we were working without a backend, we were going to fetch everything  through the Github API https://docs.github.com/en/rest. 
Therefore we decided our "Backend" will be the well documented Github repository and clear API calls, which delivers all data and information.

<p align="center">
    <img alt="Backend Structure for DUAW project" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/DS-images/duaw-ds/Backend-DUAW.png" width="3000" />
</p>
<h1 align="center">
  TerraViz
</h1>

We identified the possible large data set that can be reached by the Github API, understood its elements and how we can access them. After the ideation session WD and DS understood what kind of information we would like to display, where to get this information from (Github), how the data can be provided (directly, via API and by providing further files).
For the technical details of this part please refer to the file (DS readme).

We prepared a https://github.com/faketechlabsberlin organisation and forked existing Techlabs projects there. Since some desired information cannot be provided directly it's important to add additional files that can be accessed via the API for display on the Website. In an iterative process we came up with the design for the following additional file that needs to be manually added to each repository, *project-description.json* in which the team provides further information e.g. about the members and their respective tracks. The provided JSON format that can be consumed via the API for display on the Website. 

### Recommendation system based on Project description

Initially we came up with several ideas for interesting data visualisation projects that could be displayed on an engaging Website about Techlabs graduation projects. Either giving insights about technical knowledge of participants and using the Stack Overflow Annual Developer Survey as a guiding dataset for analysis. Or giving insights about the projects displayed on the DUAW project. 

We decided to focus on the display of the real project information, as the data set might be small at the moment (12-24 projects) but as Techlabs Berlin is growing, so will the number of available projects and the available dataset. Furthermore to increase and facilitate website engagement, we decided to implement a recommendation model based on the project. Like this the user is then offered the suggestions on which projects to explore next. 

Building a simple recommendation system based on the descriptions of the project 
Initially a manually created dataset of projects and their descriptions were used to develop the recommendation system. Initial exploratory data visualisation was performed (word clouds and heatmaps) to compare the results of the document's vectorisation. Vectorisation algorithms like bag of words and embedding (eg. BERT) were compared. For similarity analysis cosine similarity and Euclidean distance were evaluated. Cosine similarity was chosen for pairwise comparison. The results are then sorted and used for the recommendation system. The results of the recommendation models were further visualised as simple networks. For the final prototype similarity analysis after embedded vectorisation with BERT was implemented. 
As a future outlook further information about the projects, like project keywords, involved tracks, semesters could be used to tailor the recommended project further. 

<p align="center">
    <img alt="development of the recommendation system" src="https://github.com/TechLabs-Berlin/st21-terraViz/blob/main/assets/images/image-logo-white.png" width="60" />
</p>
<h1 align="center">
  TerraViz
</h1>
Some impressions from the development of the recommendation system:
(left:  word cloud of project descriptions, right: heatmap, comparison of vectorization and similarity analysis algorithms)


##### Workflow of the DUAW project from Data Science perspective

<p align="center">
    <img alt="Data Science Workflow of the DUAW project" src="https://github.com/TechLabs-Berlin/st21-terraViz/blob/main/assets/images/image-logo-white.png" width="60" />
</p>
<h1 align="center">
  TerraViz
</h1>

Overall it was a very interesting project and journey and I am so glad to have been able to work closely with our web developer during the project, it was always a pleasure to talk things through. Additionally to our WD Mentor Bernardo I would like to thank Max, David and Mattis for their input for coming up with the structure for the recommendation system.

