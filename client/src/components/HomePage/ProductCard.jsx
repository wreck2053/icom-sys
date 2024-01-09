import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    // render after productDetails gets populated
    props.productDetails && (
      <div>
        <Card style={{ cursor: "pointer" }} onClick={handleOpen}>
          <Card.Img
            variant="top"
            src={props.productDetails.Image}
            height={props.height}
          />
          <Card.Body>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.productDetails.Name}
            </Card.Title>
          </Card.Body>
        </Card>

        {(props.showModal ?? true) && (
          <Modal show={showModal} onHide={handleClose} size="xl" centered>
            <Modal.Header closeButton>
              <Modal.Title>{props.productDetails.Name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container d-flex">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ textAlign: "center", padding: 10, width: "50%" }}
                >
                  <img
                    src={props.productDetails.Image}
                    alt="Product Image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      height: "auto",
                      borderRadius: 5,
                    }}
                  />
                </div>

                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ padding: 10 }}
                >
                  <div>
                    <h4>Product Info:</h4>
                    <ul>
                      <li>
                        <strong>Capacity: </strong>
                        {props.productDetails.Capacity}
                      </li>
                      <li>
                        <strong>Type: </strong>
                        {props.productDetails.Type}
                      </li>
                      <li>
                        <strong>Usage: </strong>
                        {props.productDetails.Usage}
                      </li>
                      <li>
                        <strong>Product Description: </strong>
                        {props.productDetails.Desc}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Link
                to={
                  "/product/" +
                  props.productDetails.Brand +
                  "/id/" +
                  props.productDetails.ID
                }
              >
                <Button variant="secondary" onClick={handleClose}>
                  View on Product Page
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  );
}

export default ProductCard;
