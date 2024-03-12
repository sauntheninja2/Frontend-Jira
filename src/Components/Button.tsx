
import { Button } from '@mui/material';
import {Stack} from '@mui/material';


export default function ContainedButtons() {
    return (
        <Stack direction="row"  justifyContent={'space-around'} spacing={10}>
            <Button  variant='contained'>TODO</Button>
            <Button variant='contained'>In Progress</Button>
            <Button variant='contained'> Review</Button>
            <Button variant='contained'>Accepted</Button>
        </Stack>
    )
}