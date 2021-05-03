import React, { useEffect, useState } from 'react'
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

const ProfileForms = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    const [name, setName] = React.useState("");
    const [code, setCCode] = React.useState("");
    const [cname, setCName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");


    const ProfileProcess = (name, code, cname, address, email, mobile) => {

        if (name == "" && code == "" && cname == "" && address == "" && email == "" && mobile == "")

            alert("Success");
    }


    return (
        <>
            <CRow>
                <CCol xs="12" sm="2">
                </CCol>
                <CCol xs="12" sm="8">
                    <CCard>
                        <CCardHeader>
                            Profile
              <small> Update</small>
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup>
                                <CLabel htmlFor="firstname">First Name</CLabel>
                                <CInput id="firstname" placeholder="Enter your name" onChange={e => setName(e.target.value)} />
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
                                        <CLabel htmlFor="mobile">Enter your Mobile No</CLabel>
                                        <CInput id="mobile" placeholder="Enter your mobile" type="number" onChange={e => setMobile(e.target.value)} />
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>

                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary" onClick={() => ProfileProcess = (name, code, cname, address, email, mobile)} ><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" sm="2">
                </CCol>
            </CRow>
        </>
    )
}

export default ProfileForms
