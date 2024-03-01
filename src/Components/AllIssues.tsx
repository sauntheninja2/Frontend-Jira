import React from 'react';
import { Routes , Route , useNavigate} from 'react-router-dom';
import Box from '@mui/system/Box';
import axios from 'axios';
import { useEffect , useState } from 'react';

export default function GetAllTickets() {

 const [responseData,setResponseData] = useState<any>(null);

 useEffect(()=> {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/tickets');

            setResponseData(response.data);
        } catch(error) {
            console.log('Error fetching data:' , error);
        }
    };

    fetchData();
 }, []);

  
    return(
                <Box 
                sx= {{
                    position: 'absolute',
                    top: '100px',
                    left: '20px',
                    width: '120px',
                    border: "2px solid black",
                    padding: 2
                }}
                >
                        <div>
                            <h1>Response Data:</h1>
                            <pre>{JSON.stringify(responseData,null,2)}</pre>
                        </div>
                    </Box>
     )


}