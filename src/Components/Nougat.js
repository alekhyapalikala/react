import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const Nougat = () => {
  return (
    <div>
      <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
            <img src={'https://i.pinimg.com/564x/44/1b/4b/441b4b9c86f8612a807b1d26adcf8748.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
        <Card>
            <img src={'https://i.pinimg.com/564x/65/82/2b/65822b1f2d13b9a5abe11310d5277a20.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
        <Card>
            <img src={''}/>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Nougat
