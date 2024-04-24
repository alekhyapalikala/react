import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Graphs from './Graphs';
import { PieChart } from '@mui/x-charts/PieChart';

function Piechart() {
  return (
    <>

      <Row>
    
        <Col sm={4}>
          <Row>
            <Col sm={6} className='two'>
            <h4>CLICK-THROUGH RATE</h4>
            <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label:'A'  },
        { id: 1, value: 15, label:'B' },
        { id: 2, value: 20, label:'C' },
      ],
    },
  ]}
  width={300}
  height={150}
/>
             <Row>
              <Col sm={6} className='letter'>
           <center><p className='four'>120</p></center>
           </Col>
           <Col sm={6} className='letter'>
           <center><p className='four'>150</p></center>
           </Col>
           </Row>
             </Col>
          
            
          </Row>
        </Col>
        <Col sm={8}>
        <Graphs/>
        </Col>
      </Row>
     
    </>
  )
}

export default Piechart
