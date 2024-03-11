import "./css/Individual_Card.css"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from "@mui/system";
import { TextareaAutosize } from '@mui/base';



export default function Individual_card() {

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
        width: 100%x;
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
            <text id="title">Test Ticket </text>
            <div id="button-row">
                <Stack spacing={5} direction="row">
                    <Button variant="outlined">Edit</Button>
                    <Button variant="outlined">Assign</Button>
                    <Button variant="outlined">Comment</Button>
                    <Button variant="outlined">Progress</Button>
                </Stack>
            <text id="assignee">Assignee:</text>
            <span id="assignee-profile-pic"></span>
            <text id="assigned">Unassigned</text>
            </div>
            <p id="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
               Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <text id="comments">Comments</text>
            <Textarea id="comments-area" aria-label="minimum height" minRows={2} placeholder="Add a comment" />
            <Stack spacing={1} direction="row">
                <Button id="comment-submit" variant="outlined">Submit</Button>
            </Stack>
        </div>
    )
}