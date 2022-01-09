import React from "react";
import axios from "axios";
import ProjectsList from "./ProjectsList";

class App extends React.Component {

    state = { repos : []};

    getRepos = async () => {
        const response = await axios.get(`https://api.github.com/orgs/faketechlabsberlin/repos`, {
            headers: {
                'Authorization': `token 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`
            }
            })
            .catch((error) => {
            console.error(error)
            });
            this.setState({ repos: response.data });
            return response.data;
    };
    

    render() {
        return (
            <div className="ui container" style={{marginTop: "15px"}}>
                < ProjectsList projects={this.state.repos} />
            </div>
        );
    }
    componentDidMount () {
        this.getRepos();
    }
}

export default App;



// console.log(response.data);

// Found: {this.state.repos.length} Projects

// <SearchBar bySubmit={this.onSearchSubmit} />

