import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";

function SignUpButton() {
    return (
      <Button style={{
          marginTop: "20px",
          padding: "10px 50px"
        }}
      >
        가입하기
      </Button>
    );
  }

export default SignUpButton