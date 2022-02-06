import React from 'react';
import { 
    Typography,
    Link,
    Card,
} from '@mui/material';


const Wiki = () => {
  return (
      <>
      <div style={{ marginBottom:"90px", padding: "70px 50px" }}>

        <Typography variant="h3" style={{fontWeight:"600", textTransform:"capitalize", letterSpacing: "1px", margin:"20px 0px 40px 0px"}}>
            How it works
        </Typography>
        <p style={{ width: "985px", marginBottom:"70px" }}>
            <Typography variant="body1" gutterBottom>
                DUAW is a platform where project teams from the <b><Link href="https://techlabs.org/" target="_blank" rel="noreferrer noopener">TechLabs</Link></b> tracks across the world can showcase their graduation projects, get feedback, kickstart new collaborations and stay in contact with fellow alumni students.
            </Typography>
            <br/>
            <Typography variant="body1" gutterBottom>
            <b> Did your team just finish its TechLabs graduation project? </b> Presenting it on DUAW is easy, since the required information is already in your GitHub repository. You only need to make sure that your repository includes the needed files as explained below.
            </Typography>
        </p>
        <Card 
        sx={{ margin:"20px 0px 60px 0px", padding:"40px" }}
        elevation={3}
        >
            <p>
                <Typography variant="h5" style={{ fontWeight:"600", margin:"0px 0px 25px 0px"}}>
                Step 1: Check your metadata        
                </Typography>
                <Typography variant="body1" gutterBottom>
                If not done already, give your repo a <b> small descriptive text </b> (about 32 words) and some <b> topics </b> in the “About” section directly on the repos’ page on GitHub.
                The text will appear on your project card on the landing page as well as subheader on the project page itself. The topics (for example health, travel, food etc.) will allow others to search or filter for them to find your project easier!        
                </Typography>
            </p>
        </Card>
        <Card 
        sx={{ margin:"20px 0px 60px 0px", padding:"40px" }}
        elevation={3}
        >
        <p>
            <Typography variant="h5" style={{ fontWeight:"600", margin:"0px 0px 25px 0px"}}>
            Step 2: Check your README.md file       
            </Typography>
            <Typography variant="body1" gutterBottom>
            The first parapgrah of the <b> README.md file </b> in your GitHub repo will appear as description text on the page of your project. So ideally this description gives the reader a nice idea about your project, maybe about the initial idea, the problem you adress, your challenges, your awesome results! Or whatever you want to put in there. (Hint: If in the README.md there are headings before the first paragraph, these will be ignored by DUAW)        
            </Typography> 
        </p>
        </Card>
        <Card 
        sx={{ margin:"20px 0px 60px 0px", padding:"40px" }}
        elevation={3}
        >
        <p>
            <Typography variant="h5" style={{ fontWeight:"600", margin:"0px 0px 25px 0px"}}>
            Step 3: Add the JSON file       
            </Typography>
            <Typography variant="body1" gutterBottom>
            Please add to your repo a JSON file called <b> project-info.json. </b> It provides additional information that will appear on your project page. 
            Click <b><Link href="https://github.com/TechLabs-Berlin/wt21-duaw" target="_blank" rel="noreferrer noopener">here</Link></b> for an example - you can simply copy it into your repo and replace the values with your data. Some notes:            
            <ul>
                <li>Generally, if you don’t want to fill in a field of the JSON file, replace the value (e.g. “StringXYZ”) with null as done in the example JSON.</li>
                <li>“name” is the name of your repo as shown in GitHub, “nameFull” is the name of your project as it will appear on DUAW. </li>
                <li>“videoUrl” is an optional link you can provide if you have any video about your project, such as the project pitch.</li>
                <li>“prototypeUrl” is an optional link to your prototype - usually a Figma link, but of course it can also link to the website of your project if you built one.</li>
                <li>“tools” is a comma-separated list of the tools you used during your project, such as Figma or Miro. You don’t have to provide your programming languages, they are fetched automatically by us.</li>
                <li>“memberContacts” is a list of your project members which will appear on the Project team section of your project page. Got a team member that perfers not to be listed on your page? Simply set the “display” field for that person to false. For each project member, you can give a nickname (“name”) as well as the full name, the bootcamp track, the GitHub name and GitHub profile URL, a LinkedIn profile link and mail adress. You can also specify a personal page, for example, a UX team member might have a personal portfolio page. If you don’t want to provide one of these data, simply set the value of this field to null.</li>
            </ul>            
            </Typography>
        </p>
        </Card>
        <Card 
        sx={{ margin:"20px 0px 60px 0px", padding:"40px" }}
        elevation={3}
        >
        <p>
            <Typography variant="h5" style={{ fontWeight:"600", margin:"0px 0px 25px 0px"}}>
            Step 4: Picture beauty      
            </Typography>
            <Typography variant="body1" gutterBottom>
            Every project looks so much better with pictures! The first one is your main image which also appears on your project card on the landing page. It can be a hi-res screenshot of the prototype, your logo, some marketing material - anything that makes people wanna click on it to explore more :) Name it <b> project-image.jpg </b> and add in in your repo, it should be in landscape format and be less than 2 MB in size.        
            </Typography> 
            <Typography variant="body1" gutterBottom>
            Got some (screen)shots from your projects’ process, maybe from your brainstorming session, the data model, first mockups? People love seing processes, so if you put them in a folder of your repo called <b>DUAW_process_pics</b>, they will appear on your project page in an image gallery. This way you offer a holistic case study that is super interesting for others, with only a few images that you might have collected already.        
            </Typography> 
        </p>
        </Card>
        <Card 
        sx={{ margin:"20px 0px 60px 0px", padding:"40px" }}
        elevation={3}
        >
        <p>
            <Typography variant="h5" style={{ fontWeight:"600", margin:"0px 0px 25px 0px"}}>
            Step 5: Publish       
            </Typography>
            <Typography variant="body1" gutterBottom>
            Ready? Great! The only thing left is sending a short <b> e-mail </b> to [TBD] and ask us to publish your project! Just make sure to include the link to your repo.        
            </Typography> 
        </p>
        </Card>
        <p>
        <Typography variant="body1" gutterBottom style={{marginTop:"100px"}}>
            That was it! Well done! We are very pleased to have you here with us. For any further help or question please do not hesitate to <b><Link href="" target="_blank" rel="noreferrer noopener">contact us</Link></b>.      
        </Typography>
        <Typography variant="h5" style={{ fontWeight:"600", margin:"30px 0px 25px 0px"}}>
        Welcome to DUAW!       
        </Typography>
        </p>

      </div>
    </>
  );
};

export default Wiki;
