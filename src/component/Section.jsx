import React from 'react';
import { Typography } from '@mui/material';

const Section = ({ data, color }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                data.map((ele, i) => {
                    return (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Typography color={color}>{ele.quantity}</Typography>
                            <Typography color={color}>{ele.rate}</Typography>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Section;
