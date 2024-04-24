import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from './Table';
import Bar from './Bar';
function Analytics() {
  return (
    <div>
      <Row className='nine'>
         <Col sm={4}>
         
          <img className='six' src={'https://i.pinimg.com/564x/b9/28/7a/b9287a7cdeb0344253c8816f286af2c1.jpg'}/>
         </Col>
         
            
         
         <Col sm={4}>
            <Table/>
            
         </Col>
         <Col sm={4} className='seven'>
           <Bar/>
            
         </Col>
      </Row>
    </div>
  )
}

export default Analytics

             