import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { Center, Flex } from '@chakra-ui/react';
import './css/Card.css'






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
                        <label>
                            <p>Assigned To</p>
                            <input name="Assigned To" />
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
            <Card style={{position: 'absolute',zIndex: 1 , top:120,left:500}}>{card}</Card>
        </Box>
    );
}