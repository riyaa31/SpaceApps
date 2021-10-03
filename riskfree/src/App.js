import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography } from '@material-ui/core';

function Homepage() {
    return(
        <div className="w-full" style={{ paddingBottom: 100 }}>
            <Helmet>
                <title>Risk Free</title>
            </Helmet>

            <div className="flex flex-col md:flex-row sm:p-8 container">
                <div className="flex flex-1 flex-col min-w-0">
                    <Typography className="pl-24" variant="h4">
                        Risk Free
                    </Typography>
                    </div>
                    </div>
                    </div>
    )
}
export default Homepage