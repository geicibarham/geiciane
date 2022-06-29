import React, { useState, Fragment } from 'react';
import { Box, 
        Drawer, 
        Button, 
        List, 
        ListItem, 
        ListItemButton, 
        ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import css from './nav.css'

export default function DrawerNav() {
    const [state, setState] = useState({
        left: false
      });

      const menuArray = (
        [
            {
                route: 'sam-clark-portfolio/aboutme',
                text: 'About Me'
            },
            {
                route: 'sam-clark-portfolio/projects',
                text: 'Projects'
            },
            {
                route: 'sam-clark-portfolio/resume',
                text: 'Resume'
            }
        ]
    ); 

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: 'white', height:'100%' }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menuArray.map(({route, text}) => (
                <ListItem key={text} disablePadding>
                    <Link to={route} className='drawer-nav-link'>
                        <ListItemButton>
                            <ListItemText sx={{color: 'rgb(9, 13, 62)'}} primary={text} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                ))}
            </List>
        </Box>
      );

    return(
        <div>
        {['left'].map((anchor) => (
            <Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><p className="">menu</p></Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </Fragment>
        ))}
        </div>
    );
};