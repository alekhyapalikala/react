import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const Icecreams = () => {
  return (
    <div>
      <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/86/4a/4e/864a4edf56e5b704a6be79c73599ea70.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/12/89/8e/12898e0ffd137679ede7a6555358a5b9.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/8c/75/35/8c753519329634b65f1c64f046c03f28.jpg'}/>
            </Card>
        </Col>
        <Row className='desert'>
            <Col sm={4} className='product'>
                <Card>
                  <img src={'https://i.pinimg.com/564x/90/d5/d1/90d5d1d1c8c5052c3e2a422ff6322b22.jpg'}/>
                </Card>
            </Col>
            <Col sm={4} className='product'>
                <Card>
                    <img src={'https://i.pinimg.com/564x/e3/30/c3/e330c3e473d5d9503b8a907a3b0527f2.jpg'}/>
                </Card>
            </Col>
            <Col sm={4} className='product'>
                <Card>
                <img src={'https://i.pinimg.com/564x/e1/81/d9/e181d90cfeb3aeb081912771a10a4d3b.jpg'}/>
                </Card>
            </Col>
        </Row>
      </Row>
    </div>
  )
}

export default Icecreams
