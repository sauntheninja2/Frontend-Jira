
import './App.css'
import ContainedButtons from './Components/Button'
import Content from './Components/Content'
import SearchAppBar from './Components/NavBar'
import SimpleBottomNavigation from './Components/Footer';
import {  BrowserRouter , Routes , Route } from 'react-router-dom';
import AllIssues from './Components/AllIssues';
import { Switch } from '@chakra-ui/react';
import TemporaryDrawer from './Components/Drawer'
import { Card } from '@mui/material';
import Pages from './Pages/Layout';
import SprintLayout from './Pages/SprintLayout';





function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route>
    </Route>  
    <Route path="/allIssues" element={<AllIssues />} />
    <Route path="/sprint" element={<SprintLayout />} />
    </Routes>
    <Pages />
    </BrowserRouter>
  )
}

export default App
