import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertDismissible = ({ header, text }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{header}</Alert.Heading>
        <p>{text}</p>
        <div className="d-flex justify-content-end">
        </div>
      </Alert>
    </>
  );
}
export default AlertDismissible