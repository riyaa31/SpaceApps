import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { Typography } from '@material-ui/core';
import { DataTable, DataBox } from 'app/custom-widgets';
import axios from 'axios';
import { FuseAnimate } from '@fuse';
import jwtService from '../../../../services/jwtService';

const LandslidesApp = () => {
    render = () => {
        <div className="w-full" style={{ paddingBottom: 100 }}>
            <Helmet>
                <title>Information about landslides - Risk Free</title>
            </Helmet>

            <div className="flex flex-col md:flex-row sm:p-8 container">
                <div className="flex flex-1 flex-col min-w-0">
                    <Typography className="pl-24" variant="h4">
                        Risk Free
                    </Typography>
                    </div>
                    </div>
                    </div>
    }
}
export default withRouter(LandslidesApp)