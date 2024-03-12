import React from 'react';
import { Routes , Route , useNavigate} from 'react-router-dom';
import Box from '@mui/system/Box';
import axios from 'axios';
import { useEffect , useState } from 'react';
import './css/AllIssues.css'

export default function GetAllTickets() {

    return(
        <div id="whole-page-container">
            <text id="all-issue-text">Order by Updated</text>
            <div id="all-issues-container"></div>
            <div id="specific-card"> Body of the Card</div>
        </div>

    )
}
 