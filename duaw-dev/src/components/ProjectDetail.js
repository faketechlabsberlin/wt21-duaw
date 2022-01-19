import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from "react-dom";
import axios from "axios";
import { Typography } from "@mui/material";

const API_URL = 'https://api.github.com'
const ORG = 'faketechlabsberlin'

const getRepo = (repositoryName) => {
  return axios.get(`${API_URL}/repos/${ORG}/${repositoryName}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
    },
  })
};

const getInfo = (repositoryName) => {
  return axios.get(`${API_URL}/repos/${ORG}/${repositoryName}/contents/project-information.json`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
    },
  })
};

function useRepoInfo(repositoryName) {
  const [fetchedRepo, setFetchedRepo] = useState(null);
  const [fetchedInfo, setFetchedInfo] = useState(null);
  useEffect(() => {
    Promise.all([
      getRepo(repositoryName),
      getInfo(repositoryName)
    ]).then(([repo, info]) => {
      unstable_batchedUpdates(() => {
        setFetchedRepo(repo.data)
        setFetchedInfo(JSON.parse(atob(info.data.content)))
      })
    })
  }, [repositoryName]);
  return [fetchedRepo, fetchedInfo]
}


const ProjectDetail = () => {
  const {repositoryName} = useParams();
  const [fetchedRepo, fetchedInfo] = useRepoInfo(repositoryName)
  
  console.log(fetchedRepo, fetchedInfo)

  return (
    <div>
      {fetchedRepo === null && 'loading...'}
      {fetchedRepo && (
        <>
        <Typography variant='h3'>
          {fetchedInfo.nameFull}
        </Typography>
        <br/>
        <Typography color='primary'>
        Topics Tags
      </Typography>
      <br/>
      <Typography variant='h5'>
          Short Description
        </Typography>
        <br/>
        <Typography variant='subtitle2'>
          {fetchedRepo.updated_at}
        </Typography>
        <br/>
        <Typography>
          Long Description: {fetchedRepo.description}
        </Typography>
      </>
      )}
    </div>
  );
}

export default ProjectDetail;







// export function Repository() {
//   const parameters = useParams();
//   const url = `https://github.com/faketechlabsberlin/${parameters.repositoryName}`
  
//   return url
// }



// class Repository extends React.Component {
//   state = { repos: [] };
  
//   getRepos = async () => {
//     const parameters = useParams();
//     const response = await axios
//       .get(`https://github.com/faketechlabsberlin/${parameters.repositoryName}`, {
//         headers: {
//           Authorization: `token ${process.env.REACT_APP_TOKEN}`,
//         },
        
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     this.setState({ repos: response.data });
//     return response.data;
//   };

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "15px" }}>
//         {this.state.repos}
//       </div>
//     );
//   }
//   componentDidMount() {
//     this.getRepos();
//   }
// }





// function Repository() {
//   const [fetchedData, setFetchedData] = useState([]);
//   useEffect (() =>{
//     const getData = async () => {
//       const parameters = useParams();
//       const data = await axios.get(
//         `https://github.com/faketechlabsberlin/${parameters.repositoryName}`, {
//           headers: {
//             Authorization: `token ${process.env.REACT_APP_TOKEN}`,
//           },
//         });
//         setFetchedData(data);
//     };
//     getdata();
//     }, []);
      

//   console.log("resposne: ",repo);

//     return (
//       <div className="ui container" style={{ marginTop: "15px" }}>
//         {repo.data}
//       </div>
//     );
//     }