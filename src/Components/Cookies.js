import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Cookies = () => {
  return (
    <div>
      <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/d8/72/f1/d872f1d92aa4efcef22ea14bc6d2fcfe.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/19/2d/4a/192d4ac30d1a8e0ae723afd309b1a730.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/1c/eb/20/1ceb202654b02a8b74dfb29d552b238f.jpg'}/>
            </Card>
        </Col>
        <Row className='desert'>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/aa/18/c9/aa18c9ca176354be27cdab1c5ddffd90.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/5a/cd/cb/5acdcbc4b3e2021d698488ccd538e0a4.jpg'}/>
            </Card>
        </Col>
        <Col sm={4} className='product'>
            <Card>
                <img src={'https://i.pinimg.com/564x/10/77/26/107726c162457cb9fc25739fb6b6deb5.jpg'}/>
            </Card>
        </Col>

        </Row>
      </Row>
    </div>
  )
}

export default Cookies
