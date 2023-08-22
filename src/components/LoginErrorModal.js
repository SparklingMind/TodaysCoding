import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function LoginErrorModal(props) {
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent:"center"
      }}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          로그인 오류
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{
            margin:"10px auto"
        }}>
          아이디 또는 비밀번호가 일치하지 않습니다.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginErrorModal


