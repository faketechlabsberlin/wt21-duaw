import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';


const useStyles = makeStyles({
    active:{
        background: '#EB2E4E'
    }
})

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
            text: 'About',
            path: '/about'
        }
    ]

    // const img = <img style={{marginTop: 10}} alt="logo" src="/logo.svg"/>
    
    return (
        <div>
            <AppBar color='secondary' position='static'>
                <Toolbar>
                     <Box
                        component="img"
                        sx={{
                            height: 64,
                        }}
                        alt="Logo"
                        src="/logo.svg"
                    />
                    <List className="menuBar" >
                        {menuItems.map(item=> (
                            <ListItem style={{marginLeft:'auto'}}
                                button  
                                key= {item.text}
                                onClick= {()=> navigate(item.path)}
                                className= {location.pathname === item.path ? classes.active : null}  
                            >
                                <ListItemText primary={item.text} style={{display : 'inline-block'}} />
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
            <div>
                <div ></div>
                {children}
            </div>
        </div>
    )
}



export default Layout
