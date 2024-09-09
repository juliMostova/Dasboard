import './App.css';
import { Route,Routes } from 'react-router-dom';

import Analytics from './components/pages/Analytics';
import Dashboard from './components/pages/Dashboard';
import History from './components/pages/History';
import Celendar from './components/pages/Celendar';
import Reports from './components/pages/Reports';
import Settings from './components/pages/Settings';
import Tickets from './components/pages/Tickets';
import Users from './components/pages/Users';
import SideBar from './components/SideBar';
import RightSite from './components/RightSite';

function App (){
    return(
        <div className='app'>

            <div className='app_glass'>
<SideBar/>
<Dashboard/>
<RightSite/>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/celendar' element={<Celendar/>}/>
    </Routes> 
    </div>
        </div>
    );
}

export default App;







































