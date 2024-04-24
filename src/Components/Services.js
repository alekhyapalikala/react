import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Services() {
  return (
    
      <Row className='desert'>
        <Col sm={4} className='ice'>
          <Card>
     <Link to='/Cupcakes'><img src={'https://i.pinimg.com/736x/f1/ef/72/f1ef7231ae543d42a5f225f0e7221c5a.jpg'}/></Link>
     </Card>
     </Col>
     
     <Col sm={4} className='ice'>
      <Card>
     <Link to='/Icecreams'><img src={'https://i.pinimg.com/564x/cc/52/c6/cc52c6b931432640ab7bbcbfebd1989d.jpg'}/></Link>
     </Card>
     </Col>
     <Col sm={4} className='ice'>
     <Card>
      <Link to='/Mashmallow'><img src={'https://i.pinimg.com/564x/27/fd/84/27fd84fe39b544f94d8842ba2e1b6eaf.jpg'}/></Link>
      </Card>
     </Col>
     <Row className='desert'>
     <Col sm={4} className='ice'>
     <Card>
      <Link to='/Sandwich'><img src={'https://i.pinimg.com/564x/96/94/ae/9694aebd4e6e759848dc6e4f026b0892.jpg'}/></Link>
      </Card>
      </Col>
      <Col sm={4} className='ice'>
      <Card>
        <Link to='/Cookies'><img src={'https://i.pinimg.com/564x/28/ba/ae/28baaeb4f5db65f49a1ad5ab50d4e043.jpg'}/></Link>
        </Card>
      </Col>
      <Col sm={4} className='ice'>
      <Card>
        <Link to='/Nougat'><img src={'https://i.pinimg.com/564x/ef/bb/e3/efbbe3afe464883c567039138454381e.jpg'}/></Link>
        </Card>
      </Col>
     </Row>
</Row>
  )
}

export default Services
