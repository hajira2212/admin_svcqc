import React, { useState, useEffect } from 'react';
import { HttpHelper } from "../../src/helper/HTTPHelper";
import { LOGIN_COMPANY } from "../../src/helper/APIConfig"
import { Link } from 'react-router-dom'
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


const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCCode] = useState("");

    const [name, setName] = useState(
        localStorage.getItem('Name')
      );
      const [userType, setUserType] = useState(
        localStorage.getItem('UserType')
      );
    
      useEffect(() => {
    
        localStorage.setItem('Name', name);
        localStorage.setItem('UserType', userType);
    
      }, [name, userType]);
    
      const login = (email, password,code) => {
    
        if (email != "" && password != "" && code!="") {
    
          let auth = HttpHelper(LOGIN_COMPANY, "POST", email, password,code);
          auth.then(response => {
            if (response != null) {
              localStorage.setItem('Name', response.firstName);
              localStorage.setItem('role', 1);
              localStorage.setItem('UserType', response.role);
              window.location.href = `${process.env.PUBLIC_URL}/dashboard`
            };
          });
        };
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
                                                    <CIcon name="cil-adjust" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput type="text" placeholder="Company Code" required="" onChange={e => setCCode(e.target.value)} />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                    <CIcon name="cil-user" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput type="text" placeholder="Email" required="" onChange={e => setEmail(e.target.value)} />
                                        </CInputGroup>
                                        <CInputGroup className="mb-4">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                    <CIcon name="cil-lock-locked" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput type="password" placeholder="Password" required="" onChange={e => setPassword(e.target.value)} />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs="6">
                                                <CButton color="primary" className="px-4" onClick={login(email, password)}>Login</CButton>
                                            </CCol>
                                            <CCol xs="6" className="text-right">
                                                <CButton color="link" className="px-0">Forgot password?</CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                                <CCardBody className="text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                                        <Link to="/register">
                                            <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                                        </Link>
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

export default Signin
