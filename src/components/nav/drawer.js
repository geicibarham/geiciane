import React, { useState, Fragment } from 'react';
import {
    Box,
    Drawer,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'
import { Link } from 'react-router-dom'
import css from './nav.css'
import resume from '../../geiciane-barham.pdf'

export default function DrawerNav() {
    const [state, setState] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box id="menu"
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto'
                    : 250,
                background: 'linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83));'
                , height: '100%'
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>


                <li ><a className="hoverable" href="#container">About</a></li>
                <li className="hoverable"><a className="hoverable" href="#projects">Projects</a></li>
                <li className="hoverable"><a className="hoverable" href="#contact">Contact</a></li>
                <li ><a className="hoverable" target="_blank" href={resume}>Resume</a></li>

            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <p className="">menu</p></Button>
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