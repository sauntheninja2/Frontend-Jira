import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
    component="span"
    sx={{ display: 'inline-block' , mx: '2px' , transform: 'scale(0.8)'}}
    >
        . 
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <div className="wrapper">
                <form>
                    <fieldset>
                        <label>
                            <p>Title</p>
                            <input name="title" />
                        </label>
                        <label>
                            <p>Description</p>
                            <input name="description" />
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
          
        </CardContent>
    </React.Fragment>
);

export default function OutlinedCard(){
    return (
        <Box>
            <Card style={{marginTop: '5em'}} variant='outlined'>{card}</Card>
        </Box>
    );
}