import React, { useEffect, useState } from 'react'
import { HttpAuthHelper } from "../../src/helper/HTTPHelper";
import { CREATE_COMPANY } from "../../src/helper/APIConfig"
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const CompanyForms = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    const [firstname, setFirstname] = React.useState("");
    const [companyCode, setCompanyCode] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [contactNo, setContactNo] = React.useState("");
    const [message, setMessage] = React.useState("");


    const CompanyProcess = (firstname, companyCode, companyName, address, email, contactNo) => {

        if (firstname != "" && companyCode != "" && companyName != "" && address != "" && email != "" && contactNo != "") {

            var credential = JSON.stringify({ firstname, companyCode, companyName, address, email, contactNo });

            let add = HttpAuthHelper(CREATE_COMPANY, "POST", credential);
            add.then(response => {
                if (response) {
                    alert(response.message);
                }
                else {
                    alert(response.message);
                }
            });
        }
        else {
            alert("Please fill out this fields!");
        }
    }

    const initialState = {
        firstname: "",
        companyCode: "",
        companyName: "",
        address: "",
        email: "",
        contactNo: ""
    };

    const ClearProcess = () => {
        // setFirstname= ("");
    }


    return (
        <>
            <CRow>
                <CCol xs="12" sm="2">
                </CCol>
                <CCol xs="12" sm="8">
                    <CCard>
                        <CCardHeader>
                            Company
              <small> Details</small>
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup>
                                <CLabel htmlFor="firstname">First Name</CLabel>
                                <CInput id="firstname" placeholder="Enter your name" onChange={e => setFirstname(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="Code">Company Code</CLabel>
                                <CInput id="code" placeholder="Enter your code" onChange={e => setCompanyCode(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="company">Company</CLabel>
                                <CInput id="company" placeholder="Enter your company name" onChange={e => setCompanyName(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="address">Address</CLabel>
                                <CInput id="address" placeholder="Enter address" onChange={e => setAddress(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup row className="my-0">
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="email">Email</CLabel>
                                        <CInput id="email" placeholder="Enter your email" type="email" onChange={e => setEmail(e.target.value)} />
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="4">
                                    <CFormGroup>
                                        <CLabel htmlFor="mobile">Mobile No</CLabel>
                                        <CInput id="mobile" placeholder="Enter your mobile no" type="number" onChange={e => setContactNo(e.target.value)} />
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>

                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary" onClick={() => CompanyProcess(firstname, companyCode, companyName, address, email, contactNo)} ><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger" onClick={() => ClearProcess()}><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" sm="2">
                </CCol>
            </CRow>
        </>
    )
}

export default CompanyForms
