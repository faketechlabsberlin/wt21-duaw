# Data Science 
The data science part involed two main aspects:
1. Building a backbone and collecting data for display on DUAW Website
2. Preparation of a recommendation model to suggest other projects a visitor might find interesting, based on the project they currently visit.

#### Workflow of the DUAW project from Data Science perspective

<p align="center">
    <img alt="Data Science Workflow of the DUAW project" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/Workflow-DUAW.png" width="500" />
</p>

## Building a backbone and collecting data for display on DUAW Website 
Initially WD and DS needed to identify a way to collect information to be displayed on the website and since we were working without a backend, we were going to fetch everything  through the Github API [https://docs.github.com/en/rest](https://docs.github.com/en/rest). 
The "Backend" will be the well documented Github repository and clear API calls, which delivers all data and information.

<p align="center">
    <img alt="Backend Structure for DUAW project" src="https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/Backend-DUAW.png" width="400" />
</p>

The API requests like [https://api.github.com/orgs/faketechlabsberlin/repos](https://api.github.com/orgs/faketechlabsberlin/repos) returns a JSON file with the list of all repositories in this organisation. Each entry can be accessed via its key. The understanding and development of the API requests is documented [here](https://docs.google.com/document/d/1QXbku0m9IZ4pIIGcMU5w2gV4SWQm4IdJ4WzxZ-rQzt4/edit?usp=sharing) and [here](https://docs.google.com/spreadsheets/d/1ClUbkvfNUsZx11E67UgOiJZmQgV_Su72sxnqYfyj0W0/edit?usp=sharing)

**Providing additonal information that cant be automatically accessed via the API**:

In an iterative process we came up with the design for the following additional file that needs to be manually added to each repository, [`project-information.json`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/project-information.json) which provides further information e.g. about the members and tracks of the team.
The provided JSON format that can be consumed via the API for display on the Website. 

*Data cleaning and decoding:* API request of manually added files returns their content (data.content)in base 64 encoded 
this can be decoded via atob(data.content. If the file is in JSON format, the decoded content needs to be parsed JSON.parse(atob(data.content)and then information can be accessed via their key.

The inital Github-API requests were tested in a simple html file: [`html-Github-Api-requests-all.html`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/html-Github-Api-requests-all.html)

## Inclusion of a project for display on DUAW website
The current prototype is fetching data from an external github organisation: [https://github.com/faketechlabsberlin](https://github.com/faketechlabsberlin).

To be presented on the DUAW website, the following steps need to be undertaken in the github repository of the project:
1. Under `Settings`: the `about` section as well as `topics` need to be filled.
2. To provide further information about the team, the [`project-information.json`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/project-information.json) file needs to be downloaded, updated with required information and added to first page of the repository.
3. A project image (JPG format) needs to be uploaded at the first page of the repository and called `project-image.jpg` 
4. Finally the entire repository needs to be forked to [https://github.com/faketechlabsberlin](https://github.com/faketechlabsberlin)


## Preparation of recommendation model
We decided to focus on the display of the real project information, as the data set might be small at the moment (12-24 projects) but as Techlabs Berlin is growing, so will the number of available projects and the available dataset. Furthermore to increase and facilitate website engagement, we decided to implement a recommendation model based on the project. Like this the user is then offered the suggestions on which projects to explore next. 

Initially a manually created dataset of projects and their descriptions were used to develop the recommendation system [DUAW-Datasheet-Sheet1.csv](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/DUAW_%20Datasheet%20-%20Sheet1.csv). Exploratory data visualisation was performed (word clouds and heatmaps) to compare the results of the document's vectorisation. Vectorisation algorithms like bag of words and embedding (eg. BERT) were compared. For similarity analysis cosine similarity and Euclidean distance were evaluated. Cosine similarity was chosen for pairwise comparison. The results are then sorted and used for the recommendation system. The results of the recommendation models were further visualised as simple networks. For the final prototype similarity analysis after embedded vectorisation with BERT was implemented. 
As a future outlook further information about the projects, like project keywords, involved tracks, semesters could be used to tailor the recommended project further. 

Evaluation of ML algorithms for recomendation model: [`DUAW- Building of a recommendation system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/DUAW-%20Building%20of%20a%20recommendation%20system.ipynb)
The final recomendation model utilises vectorisation via a pre-trained BERT model and cosine similarity analysis which identifies the similarity between the projects based on their text descriptions.
Recomendation Model for DUAW project: [`recomender-system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomender-system.ipynb).
Which results are exported and updated to [`recomendations.json`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomendations.json).

##### To update the recommendations for display on the website:
1. The following python packages are needed:
   - `pandas`, `numpy`, `requests`, `json`
   - ML: `from sentence_transformers import SentenceTransformer` ,`from sklearn.metrics.pairwise import cosine_similarity`
2. execute [`recomender-system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomender-system.ipynb) (in `Jupyter Notebook`)
3.  update the content of the `recomendations.json` file:  [recomendations.json](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/recomendations.json)
4. the last step will require a pull request and merging by a member of the DUAW team.



### Libraries used in this project
- `%matplotlib inline`
- `import matplotlib.pyplot as plt`
- `import seaborn as sns`
- `import pandas as pd`
- `import numpy as np`
- API requests: `import requests`
- working with regular expressions: `import re`
- Visualisation of wordclouds: `from wordcloud import WordCloud`
- Machine Learning algorithms:
- Bag of Words - CountVectorizer: `from sklearn.feature_extraction.text import CountVectorizer`
- Bag of Words - TfidfVectorizer: `from sklearn.feature_extraction.text import TfidfVectorizer`
- BERT - Sentence Transformation: `from sentence_transformers import SentenceTransformer`
- pairwise similarity analysis metrics: `from sklearn.metrics.pairwise import euclidean_distances` and `from sklearn.metrics.pairwise import cosine_similarity`
- Visualisation of Networks: 
  - `from pyvis.network import Network`
  - `import plotly.graph_objects as go`
  - `import networkx as nx`
- export of JSON files : `import json`

As a summary the following libraries were used: pandas, numpy, requests, matplotlib.pyplot, json, sklearn, sentence_transformers, pyvis
