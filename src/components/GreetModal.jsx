import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap';

function GreetModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello There!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Dear CMLabs's Recruiting Team,</p>
          <p>i wanna say thank you very much for the oportunity that CMLabs's Recruiting Team give to me
          cause i really interested in front-end web development.</p>
          <p>Hopefully, with this pre-assesment test i have, i could get the chance to get to the next step and have an oportunity to grow with CMLabs.</p>
          <p>Regards,</p>
          <p>Muhammad Ardana</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default GreetModal;