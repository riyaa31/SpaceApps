import { Helmet } from 'react-helmet';
import { AppBar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Navigation from './App';
import './App.css';

function Homepage() {
    return(
        <div >
            <Typography>
                We are focused on suppressing landslides
            </Typography>
        </div>
    )
}
export default Homepage