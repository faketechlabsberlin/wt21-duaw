import React from "react";
import axios from "axios";


class App extends React.Component {
    state = { repos : []}

    getRepos = async () => {
        const response = await axios.get(`https://api.github.com/orgs/faketechlabsberlin/repos`, {
            headers: {
                'Authorization': `token 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`
            }
            })
            .catch((error) => {
            console.error(error)
            })
            console.log(response.data);
            return response.data;
            
    };
    

    render() {
        return (
            <div className="ui container" style={{marginTop: "15px"}}>
                <ul><li>Repositories</li></ul>
            </div>
        );
    }
    componentDidMount () {
        this.getRepos();
    }
}

export default App;



// <SearchBar bySubmit={this.onSearchSubmit} />