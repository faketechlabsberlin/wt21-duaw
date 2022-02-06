# The data science part involed two main aspects:



# To update the recommendations for display on the website:

The following python packages are needed: XXXXX
execute recomender-system.ipynb (in Jupyter Notebook)
update the content of the recomendations.json file: https://github.com/TechLabs-Berlin/wt21-duaw/blob/main/recomendations.json
the last step will require a pull request and merging by a member of the DUAW team

# import of needed libraries
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# accessing API requests
import requests

# Load the regular expression library
import re

# Import the wordcloud library
from wordcloud import WordCloud

## Bag of Words - CountVectorizer
from sklearn.feature_extraction.text import CountVectorizer
# Bag of Words - TfidfVectorizer 
from sklearn.feature_extraction.text import TfidfVectorizer
# BERT - Sentence Transformation
from sentence_transformers import SentenceTransformer

# import pairwise similarity analysis metrics 
from sklearn.metrics.pairwise import euclidean_distances
from sklearn.metrics.pairwise import cosine_similarity

from pyvis.network import Network
import plotly.graph_objects as go
import networkx as nx

import json
