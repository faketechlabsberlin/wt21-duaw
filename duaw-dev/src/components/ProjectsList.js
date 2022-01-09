import React from 'react'


const ProjectsList = props => {
    
    console.log(props.projects);
    
    const project = props.projects.map((proj) =>{
            return <ul key={proj.id} style={cardStyle}> 
            <li>Project Name : {proj.name}</li>
            <li>Project Description : {proj.description}</li>
            <li>Languages : {proj.language}</li>
            <li>Last Upadte : {proj.updated_at}</li>
            <li>GitHub link : {proj.git_url}</li>
            </ul>
            
        });
    
    
    return(
        <div>
            <h1 style={headingStyle}>Techlabs Berlin</h1>
            <h2>Projects</h2>
            <div>
                {project}
            </div>
            
        </div>
    )
}

const headingStyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "black"
}

const cardStyle ={
    padding: "40px",
  backgroundColor: "#fffff",
  maxWidth: "550px",
  borderRadius: "20px",
  margin: "20px auto",
  boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
}

export default ProjectsList



// console.log(props.projects);


// const project = props.projects.map((proj) =>{
//     return proj.description
// });