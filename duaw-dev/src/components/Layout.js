import React from 'react';
import { 
AppBar,
Toolbar,
List,
ListItem,
ListItemText,
Grid,
Link,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';


const useStyles = makeStyles({
    page:{
        margin:"none"
    },
    buttons: {
        "&:hover": {
            borderBottom: "3px solid !important"
          },
          "&:active":{
            background: "#f4f !important"
            },

    } 
});

const Layout = ({ children }) => {
    const classes = useStyles ()
    const navigate = useNavigate ()
    const location = useLocation ()


    const menuItems =[
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'About us',
            path: '/about'
        },
        {
            text: 'How it works',
            path: '/wiki'
        }
    ]

    // const img = <img style={{marginTop: 10}} alt="logo" src="/logo.svg"/>
    
    return (
        <Box>
            <AppBar position='sticky' elevation={3} style={{backgroundColor: "white"}}>
                <Toolbar>
                     <Box
                        component="img"
                        sx={{
                            height: 68,
                            marginRight:'auto',
                        }}
                        alt="Logo"
                        src="/logo.svg"
                        onClick= {()=> navigate('/')}
                    />
                    <List className="menuBar" >
                        {menuItems.map(item => (
                            <ListItem style={{ color:'#EB2E4E', display: 'inline-block', margin:"2px 6px", width:"125px", textAlign:"center" }}
                                button  
                                key= {item.text}
                                onClick= {()=> navigate(item.path)}
                                className= {location.pathname === item.path ? classes.buttons : null}     
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
            <div className={classes.page}>
                {children}
            </div>
            <footer style={footerStyle}>
                <Box>
                    <Grid container spacing={4}>
                        <Grid item xs={1} style={{margin:'20px 0px 20px 30px'}}>
                            <Box
                                    component="img"
                                    sx={{
                                        height: 64,
                                        marginRight:'auto',
                                    }}
                                    alt="Logo"
                                    src="/logo.svg"
                                    onClick= {()=> navigate('/')}
                                />
                        </Grid>
                        <Grid item xs={3} style={{margin:'15px 0px'}}>
                            <Box style={{margin:'10px 0px'}}>
                                The DUAW team © 2022.
                            </Box >
                            <Box>
                                DUAW is a platform for showcasing final bootcamp projects. This is a proof of concept.
                            </Box >
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={1}>
                            <List >
                                {menuItems.map(item => (
                                    <ListItem 
                                    style={{ display: 'inline-block', margin:"1px 5px", width:"125px", textAlign:"right" }}
                                    key= {item.text}     
                                    >

                                        <Link href={item.path} style={{ color: "white" }}>{item.text}</Link>
                                        
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </footer>
        </Box>
    )
}

const footerStyle= {
    color: "white",
    height: "210px",
    background: "#0A3147",
};



export default Layout
