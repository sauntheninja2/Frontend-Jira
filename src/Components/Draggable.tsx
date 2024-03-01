import * as React from 'react';
import {useDraggable} from '@dnd-kit/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {  Typography } from '@mui/material'


function Draggable(props){
    const {attributes,listeners,setNodeRef , transform} = useDraggable({
        id: 'draggable',
    });
    
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}.px,0)`,
    } : undefined;

    return (
        <Card ref ={setNodeRef} sx={{height: '90px' , width: '175px'}} {...listeners} {...attributes}>
            {props.children}
        <CardContent>
            <Typography sx={{   fontsize:10 }} color="text.secondary" gutterBottom>
                Test Card
            </Typography>
            <Typography variant='h5' component="div">
                Test
            </Typography>
            </CardContent>
            </Card>
    )
}