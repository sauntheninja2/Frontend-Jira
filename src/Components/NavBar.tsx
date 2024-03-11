import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button/Button';
import { useState } from 'react';
import Card from './Card';
import Drawer from './Drawer';
import { createPortal } from 'react-dom';
import { ModalContent } from '@chakra-ui/react';
import {Routes , Route , useNavigate , Link} from 'react-router-dom';
import getAllTickets from './GetAllTickets';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {



  const [showModal , setShowModal] = useState(false);
  const navigate = useNavigate()
const handleRedirect = () => {
  navigate('GetAllTickets')
}
  
  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="absolute">
        <Toolbar sx={{justifyContent: "space-between"}}variant='dense'>
          <Drawer />
          <Button color="inherit"  onClick={()=> setShowModal(true)}>  Create</Button>
          {showModal && createPortal(
            <Card /> , document.body
          )}
          <Button color="inherit" onClick={handleRedirect}>Open Issues</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}