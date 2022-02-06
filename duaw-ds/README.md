

# Github repositories

[`project-information.json`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/project-information.json)

[`html-Github-Api-requests-all.html`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/html-Github-Api-requests-all.html)


# Preparation of recommendation model
Evaluation of ML algorithms for recomendation model: [`DUAW- Building of a recommendation system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/DUAW-%20Building%20of%20a%20recommendation%20system.ipynb)

Recomendation Model for DUAW project: [`recomender-system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomender-system.ipynb)

 [`recomendations.json`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomendations.json)





With DUAW, we created the platform for TechLabs teams and students to showcase their graduation projects.

DUAW is a project hub that documents and presents all TechLabs graduation projects and the people behind them, through the years and from across the world. On highly visualized and detailed project pages, graduate students can present their projects for others to learn about them, upvote their projects, contact them with requests for collaborations, questions, recommendations, or feedback. DUAW aims to strengthen the TechLabs alumni community and support TechLabs to reach more students and partners while offering graduate projects the visibility and opportunities they deserve.

On a technical level, the project showcasing functionality is enabled through the wrapping of git repositories. Since the graduation projects are already stored on GitHub, there is no need for a backend to host the projects. Instead, the project data, provided by the graduating teams, is fetched directly from their project repositories via the GitHub API requests. The site is built with React, CSS, HTML, and JavaScript and features a recommendation model to suggest other projects a visitor might find interesting, based on the project they currently visit. The recomendation model utilises vectorisation via a pre-trained BERT model and cosine similarity analysis which identifies the similarity between the projects based on their text descriptions.


# The data science part involed two main aspects:



## Data Science - recommendation model
To update the recommendations for display on the website:
1. The following python packages are needed:
   - `pandas`, `numpy`, `requests`, `json`
   - ML: `from sentence_transformers import SentenceTransformer` ,`from sklearn.metrics.pairwise import cosine_similarity`
2. execute [`recomender-system.ipynb`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/recomender-system.ipynb) (in `Jupyter Notebook`)
3.  update the content of the `recomendations.json` file:  [recomendations.json](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/recomendations.json)
4. the last step will require a pull request and merging by a member of the DUAW team

For further details please refer to the Data Science Documentation: [`DS-Readme.md`](https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/duaw-ds/README.md)


#### To update the recommendations for display on the website:

The following python packages are needed: 
  - `import pandas as pd`, `import numpy as np`
  - API requests: `import requests`
  - BERT - Sentence Transformation: `from sentence_transformers import SentenceTransformer`
  - pairwise similarity analysis metrics: `from sklearn.metrics.pairwise import cosine_similarity`
  - export of JSON files : `import json`
- execute recomender-system.ipynb (in Jupyter Notebook)
- update the content of the recomendations.json file: https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/recomendations.json
- the last step will require a pull request and merging by a member of the DUAW team

 - `pandas`, `numpy`, `requests`, `json`
 - ML: `from sentence_transformers import SentenceTransformer` ,`from sklearn.metrics.pairwise import cosine_similarity`

### import of needed libraries
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

pandas, numpy, requests, matplotlib.pyplot, json`
