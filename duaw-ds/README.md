# The data science part involed two main aspects:



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
