import React from "react";

const Outcomes = (props) => {
    const { repos } = props;
    console.log(`Repos is:`, repos)
    return (
            <ul><li>Repo One</li></ul>
        ); 
}

export default Outcomes;