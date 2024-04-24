import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Sandwich = () => {
  return (
    <div>
      <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
           <img src={'https://i.pinimg.com/564x/9f/9f/9b/9f9f9b557a70f6d7a0a5a4b2e3910981.jpg'}/>
           </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
           <img src={'https://i.pinimg.com/736x/16/c5/96/16c596b6f2289e76c1904b728e1a6a9d.jpg'}/>
           </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
           <img src={'https://i.pinimg.com/564x/59/5a/44/595a4419e65f52e067c15555a7162501.jpg'}/>
           </Card>
        </Col>
        <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
           <img src={'https://i.pinimg.com/564x/5e/50/5c/5e505ceedce1e8a384e25dfcfc374b8d.jpg'}/>
           </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
           <img src={'https://i.pinimg.com/564x/c3/b1/ac/c3b1acc2d157fc021aeb6bfc6d454e07.jpg'}/>
           </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
           <img src={'https://i.pinimg.com/564x/e5/5d/31/e55d318ffe7a342b718d2e2125814c80.jpg'}/>
           </Card>
        </Col>

        </Row>
      </Row>
    </div>
  )
}

export default Sandwich
