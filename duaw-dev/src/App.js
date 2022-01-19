import React from "react";
import axios from "axios";
import ProjectsList from "./components/ProjectsList";
import "./index.css"


/**
 * TODO: I'd recommend refactor to function components
 */

/**
 * TODO: change the name of the file to Home and then App is where both your routes happen
 */

class App extends React.Component {
  state = { repos: [] };

  getRepos = async () => {
    const response = await axios
      .get(`https://api.github.com/orgs/faketechlabsberlin/repos`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .catch((error) => {
        console.error(error);
      });
    this.setState({ repos: response.data });
    return response.data;
  };

  render() {
    return (
      <div>
        <ProjectsList projects={this.state.repos} />
      </div>
    );
  }
  componentDidMount() {
    this.getRepos();
  }
}

export default App;

// console.log(response.data);

// Found: {this.state.repos.length} Projects

// <SearchBar bySubmit={this.onSearchSubmit} />
