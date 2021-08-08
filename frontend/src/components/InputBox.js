import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const InputBox = ({ word, setWord, handleSubmit }) => {
  return (
    <Container>
      <Row className='justify-content-center mt-4'>
        <Col xs={12} md={8} lg={8}>
          <h3>Search Gallery</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type='text'
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder='Search Text...'
                />
              </Col>
              <Col>
                <Button variant='primary' type='submit'>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default InputBox;
