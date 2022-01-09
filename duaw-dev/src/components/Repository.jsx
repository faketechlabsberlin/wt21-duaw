import { useParams } from "react-router-dom"



export function Repository() {
  const parameters = useParams();
  const url = `https://github.com/faketechlabsberlin/${parameters.repositoryName}`
  
  return url
}