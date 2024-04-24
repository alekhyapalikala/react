import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import WindowIcon from '@mui/icons-material/Window';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import DatasetIcon from '@mui/icons-material/Dataset';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
function Sidenavbar() {
  return (
    <div>
      <h5><IcecreamOutlinedIcon/>DESERT DELIGHT</h5>
    <Link to='/'><p><HomeIcon/>Dashboard</p></Link>
    <Link to='/Statistics'><p><AnalyticsIcon/>Statistics</p></Link>
    <Link to='/Services'> <p><LocalGroceryStoreIcon />Products</p></Link>
    <Link to='/Tasklist'><p><WindowIcon/>Task list</p></Link>
    <Link to='/Data'><p><DatasetIcon/>Data</p></Link>
    <hr/>
    
    <Link to ='/Tasklist'><p><NotificationsNoneIcon/>Notifications</p></Link>
    <p><LogoutIcon />Logout</p>
    </div>
  )
}

export default Sidenavbar
