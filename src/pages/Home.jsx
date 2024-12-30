import React, { useState , useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Row from 'react-bootstrap/Row'
import axios from 'axios';

import { Link } from 'react-router';
// import { useEffect } from 'react/cjs/react.production';

const Home = () => {
  
  const [products , setProducts] = useState([]);

  useEffect(() => {
      // 'https://dummyjson.com/products'
      axios.get(`https://dummyjson.com/products`).then((response) => {
          console.log("response" , response)
          setProducts(response.data.products);
      }).catch((error) => {
          console.log("Error", error);
      })
  }, [])

  return (
      
        <Container fluid>

    <Row>

          <Col><div style={{width: "100vw"}} className="d-flex  justify-content-center align-items-center row-gap-4 pt-4 col-sm-4">
              {products.map((ele , index) => (
                <Link to={`/detail/${ele?.id}`} key={index} style={{}} className='text-decoration-none'>
                      <Card key={index} style={{ width: '18rem', padding: "20px" }}>
                          <Card.Img variant="top" style={{height: "300px"}} src={ele?.images[0]} />
                          <Card.Body>
                          <Card.Title>{ele?.id}: {ele?.title}</Card.Title>
                          <Card.Text>
                              {ele?.description}
                          </Card.Text>
                          </Card.Body>
                      </Card>
                  </Link>
              ))}
              </div></Col>
              </Row>
              </Container>
          
    
  )
}

export default Home
