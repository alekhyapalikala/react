import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Mashmallow = () => {
  return (
    <div>
     <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
               <img src={'https://i.pinimg.com/564x/e2/17/81/e21781cc420aac25edaefbefac3ea967.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
            <img src={'https://i.pinimg.com/564x/0e/68/b4/0e68b49d03bc05b9293add110f1c1139.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
            <img src={'https://i.pinimg.com/564x/40/57/00/40570020ad478212f75ac4e56246a6e0.jpg'}/>
            </Card>
        </Col>
        <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
            <img src={'https://i.pinimg.com/564x/12/5a/f4/125af496e3bc598d46d0b7443dac61c4.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
            <img src={'https://i.pinimg.com/564x/ed/15/28/ed15280500da8f9ae43ba5df29dd15c0.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
            <img src={'https://i.pinimg.com/564x/73/08/c8/7308c82213c730be308f6896d07a2c37.jpg'}/>
            </Card>
        </Col>

        </Row>
     </Row>
    </div>
  )
}

export default Mashmallow
