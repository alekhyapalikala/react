import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const Cupcakes = () => {
  return (
    <div>
     <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
          <img src={'https://i.pinimg.com/564x/8b/c6/56/8bc65689b4d0560fc67efcb4f946b486.jpg'}/>
          </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
        <img src={'https://i.pinimg.com/564x/25/86/91/25869142d66ab8013481a896dc9c7fb4.jpg'}/>
        </Card>
        </Col>
        <Col sm={4} className='product'>
        <Card>
        <img src={'https://i.pinimg.com/564x/52/45/68/52456881b18aac5b152e0637de615d74.jpg'}/>
        </Card>
        </Col>
        <Row className='desert'>
            <Col sm={4}  className='product'>
                <Card>
                   <img src={'https://i.pinimg.com/564x/fe/8f/30/fe8f30f52357ec71b0874660cf26dd77.jpg'}/>
                </Card>
            </Col>
            <Col sm={4}  className='product'>
                <Card>
                <img src={'https://i.pinimg.com/564x/00/96/60/0096601cb1ddcaab7fa44bc826761b07.jpg'}/>
                </Card>
            </Col>
            <Col sm={4}  className='product'>
                <Card>
                <img src={'https://i.pinimg.com/564x/a0/8e/95/a08e95f4d2fdbf98342f7e2ff00b5b89.jpg'}/> 
                </Card>
            </Col>
        </Row>
     </Row>
    </div>
  )
}

export default Cupcakes
