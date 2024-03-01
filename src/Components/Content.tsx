import './css/Content.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import { CardContent, Typography } from '@mui/material'
export default function Content(){

   
    

    return(
        
        <div className="container">  
            <div id="firstCard" className="firstCard">
            <Card  sx={{height: '90px' , width: '190px'}} >
        <CardContent>
            <Typography sx={{   fontsize:10 }} color="text.secondary" gutterBottom>
                Test Card
            </Typography>
            <Typography variant='h5' component="div">
                Test
            </Typography>
            </CardContent>
            </Card>
            </div>
            <div id="secondCard" className="secondCard">
            <Card  sx={{height: '90px' , width: '190px'}} >
        <CardContent>
            <Typography sx={{   fontsize:10 }} color="text.secondary" gutterBottom>
                Test 2 Card
            </Typography>
            <Typography variant='h5' component="div">
                Test 2
            </Typography>
            </CardContent>
            </Card>
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