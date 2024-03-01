import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {Routes,Route,Link,BrowserRouter} from 'react-router-dom';
import AllIssues from './AllIssues';





type Anchor = 'left'

export default function TemporaryDrawer() {
    const [state,setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer = 
    (anchor: Anchor , open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type == 'keydown' &&
            ((event as React.KeyboardEvent).key == 'Tab' || 
            (event as React.KeyboardEvent).key == 'Shift')
        ) {
            return
        }
        
        setState({...state,[anchor]: open});
    };

    const list = (anchor: Anchor) => (
        <Box
        role="presentation"
        onClick={toggleDrawer(anchor,false)}
        onKeyDown={toggleDrawer(anchor,false)}
        >
            <List>
                {['Projects' , 'AllIssues' , 'Backlog'].map((text,index) => (
                   <ListItem key={text} component={Link} to={"/" + text}> 
                    <ListItemText primary={text} />
                   </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
        {(['left'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button variant='contained'endIcon={<MenuIcon />}  onClick={toggleDrawer(anchor, true)}></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
    
        ))}
      </div>

    );
}
        
        

