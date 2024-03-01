
import './App.css'
import ContainedButtons from './Components/Button'
import Content from './Components/Content'
import SearchAppBar from './Components/NavBar'
import SimpleBottomNavigation from './Components/Footer';
import {  BrowserRouter , Routes , Route } from 'react-router-dom';
import AllIssues from './Components/AllIssues';
import { Switch } from '@chakra-ui/react';
import TemporaryDrawer from './Components/Drawer'



function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route>
    </Route>
    <Route path="/allIssues" element={<AllIssues />} />
    </Routes>
    <ContainedButtons />
    <Content />
    <SearchAppBar />
    </BrowserRouter>
  )
}

export default App
