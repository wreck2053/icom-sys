import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="text-center" style={{ marginTop: "5%" }}>
      <Row>
        <Col>
          <h1 className="display-4">404</h1>
          <p className="lead">Oops! Page not found</p>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button variant="primary">Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
