import './css/Content.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import { CardContent, Typography } from '@mui/material'
import {    DropTargetMonitor, useDrag, useDrop } from 'react-dnd'
import { useCallback, useState } from 'react'
import React, {useRef} from 'react';
import { useEffect } from 'react'
import { TagLeftIcon } from '@chakra-ui/react'

interface DroppedItem {
    id: string;
    left: number;
    top: number;
}

export default function Content(){
    const cardId = "card";
    const dropFunction = (item,monitor: DropTargetMonitor,setDroppedItems: React.Dispatch<React.SetStateAction<DroppedItem[]>>,droppedItems: DroppedItem[]) => {
        console.log('Drop function triggered');
        const delta = monitor.getClientOffset()
        console.log(item)

        const updatedItems: DroppedItem = droppedItems.length === 0 ?
            [{...item, left:0 , top:0}] :
         droppedItems.map(droppedItem => {
            if (droppedItem.id === item.id) {
                return {
                    ...droppedItem,
                    left: droppedItem.left + delta.x,
                    top: droppedItem.top + delta.y,
                };
            }
            return droppedItem;
        });


        setDroppedItems(updatedItems);
        
    
        
    }

    const posX = 0 , posY = 0;



    const [{ isDragging } , drag , dragPreview] = useDrag(()=> ({
        type: 'CARD',
        item: { id: cardId , posX , posY},
        collect: (monitor) => ({
            item: monitor.getDropResult(),
            isDragging: monitor.isDragging(),
        }),
    }));





   

    const [droppedItems , setDroppedItems] = useState<DroppedItem[]>([]);


    const [,drop] = useDrop({
        accept: 'CARD', 
        drop: (item: {id:  string , top: number , left: number},monitor) => dropFunction(item,monitor,setDroppedItems,droppedItems),
        collect: (monitor) => ({
            item: monitor.getDropResult()
        })
    });

    useEffect(() => {
        console.log("Updated droppedItems:", droppedItems);
    }, [droppedItems]);







    return(
        
        <div className="container">  
            <div id="firstCard" role="Handle"  className="firstCard">
            <Card id="card" ref={drag} sx={{height: '90px' , width: '190px'}} >
        <CardContent>
            <Typography sx={{   fontsize:10 }} color="text.secondary" gutterBottom>
                Test Card
            </Typography>
            <Typography variant='h5' component="div">
                
            </Typography>
            </CardContent>
            </Card>
            </div>
            <div id="secondCard" className="secondCard"  data-testid="secondCard" ref={drop}>
                {droppedItems.map(item => (
                    <div key={item.id} style={{position: 'relative' , left: item.left,top: item.top}}>
                        <Card id={item.id} sx={{height: '90px' , width: '190px'}}></Card>
                    </div>
                ))}
            </div>
            <div id="thirdCard" className="thirdCard">
            <Card  sx={{height: '90px' , width: '190px'}} >
        <CardContent>
            <Typography sx={{   fontsize:10 }} color="text.secondary" gutterBottom>
                Test 3 Card
            </Typography>
            <Typography variant='h5' component="div">
                Test 3
            </Typography>
            </CardContent>
            </Card>
            </div>
            <div id="fourthCard" className="fourthCard">
            <Card  sx={{height: '90px' , width: '190px'}} >
        <CardContent>
            <Typography sx={{   fontsize:10 }} color="text.secondary" gutterBottom>
                Test 4 Card
            </Typography>
            <Typography variant='h5' component="div">
                Test 4
            </Typography>
            </CardContent>
            </Card>
            </div>
         
        </div>

    )
}