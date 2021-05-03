import React, { useState, useEffect } from 'react';
import { HttpHelper } from "../../src/helper/HTTPHelper";
import { LOGIN } from "../../src/helper/APIConfig"
import companyLogo from '../assets/images/admin.png';
// import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] = useState(
    localStorage.getItem('UserType')
  );
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('currentUser')
  );

  useEffect(() => {
    localStorage.setItem('UserType', userType);
    localStorage.setItem('currentUser', currentUser);
  }, [userType, currentUser]);

  const loginProcess = () => {

    if (email != "" && password != "") {

      var credential = JSON.stringify({ email, password });
      let auth = HttpHelper(LOGIN, "POST", credential);
      auth.then(response => {
        if (response && response.token) {
          localStorage.setItem("currentUser", JSON.stringify(response));
          localStorage.setItem('role', 1);
          localStorage.setItem('UserType', response.roles);
          localStorage.setItem('token', response.token);
          window.location.href = `${process.env.PUBLIC_URL} /#/dashboard`

        }
        else {
          // alert(response.message);
        }
      });
    }
    else {
      alert("Please fill out this fields!");
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={() => loginProcess(email, password)}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '34%' }}>
                <CCardBody className="text-center">
                  <div>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
