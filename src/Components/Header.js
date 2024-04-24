import React from 'react'
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Row className="An">
      
        <Col sm={6} className='ant'>
        
        <h2><DensityMediumIcon/>ANALYTICAL BOARD</h2>
        </Col>
        <Col sm={6} className='anti'>
          <EmailIcon/>
          <Link to='/Tasklist'><NotificationsActiveIcon /></Link>
          <AccountBoxRoundedIcon/>
          <Link to='/Data'><button>ADD MEMBER</button></Link>

        </Col>

      </Row>
      
    </div>
  )
}

export default Header
