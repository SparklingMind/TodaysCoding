import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignUpCompleteModal(props) {
  return (
    <Modal
      style={{
        display: "flex"
      }}
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          회원가입 완료
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{
            margin:"10px auto"
        }}>
          회원가입이 완료되었습니다.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpCompleteModal

