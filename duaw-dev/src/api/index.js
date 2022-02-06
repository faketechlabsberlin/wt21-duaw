import axios from "axios";

const API_URL = 'https://api.github.com'
const ORG = 'faketechlabsberlin'

export const getRepo = async (repositoryName) => {
  const response = await axios.get(`${API_URL}/repos/${ORG}/${repositoryName}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
    },
  })
  return response.data
};

export const getInfo = async (repositoryName) => {
  const response = await axios.get(`${API_URL}/repos/${ORG}/${repositoryName}/contents/project-information.json`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
    },
  })
  return JSON.parse(atob(response.data.content))
};

export async function getRepos() {
  const response = await axios.get(
    `https://api.github.com/orgs/faketechlabsberlin/repos`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN}`,
      },
    }
  );
  return response.data
}

export function getImage(repositoryName) {
  return `https://raw.githubusercontent.com/${ORG}/${repositoryName}/main/project-image.jpg`
}


export async function getRecomendations(repositoryName) {
  const response = await axios.get('/recomendations.json')
  return response.data[repositoryName]
}