import "./css/Individual_Card.css"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from "@mui/system";
import { TextareaAutosize } from '@mui/base';
import axios from "axios";
import {useEffect , useState} from 'react';
import { useParams } from "react-router-dom";




export default function Individual_card() {

  const [loading ,setLoading]  = useState(true);
  const [data , setData] = useState<any[]>([])


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const {data: response} = await axios.get(`http://localhost:8080/tickets/3`);
        setData(response); 
      }catch (error) {
        console.error('error')
      }
      setLoading(false);
    }

    fetchData();
  }, []);

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
    
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
    
      const Textarea = styled(TextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 50%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );

    return (
        <div id="container">
            <div id="project-image"></div>
            <div id="title">{data.title}</div>
            <div id="button-row">
                <Stack spacing={5} direction="row">
                    <Button variant="outlined">Edit</Button>
                    <Button variant="outlined">Assign</Button>
                    <Button variant="outlined">Comment</Button>
                    <Button variant="outlined">Progress</Button>
                </Stack></div>
            <text id="assignee">Assignee</text>
            <span id="assignee-profile-pic"></span>
            <text id="assigned">Unassigned</text>
            <p id="description">
              {data.description}
            </p>
            <Textarea id="comments-area" aria-label="minimum height" minRows={2}  placeholder="Add a comment" />
        </div>
    )
}