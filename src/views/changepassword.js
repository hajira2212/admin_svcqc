import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ChangePassword = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    return (
        <>
            <CRow>
                <CCol xs="12" sm="2">
                </CCol>
                <CCol xs="12" sm="8">
                    <CCard>
                        <CCardHeader>
                            Change Password
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup>
                                <CLabel htmlFor="Old">Old Password</CLabel>
                                <CInput id="oldPassword" placeholder="Enter your old password" />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="new">New Password</CLabel>
                                <CInput id="newPassword" placeholder="Enter your new password" />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="confirm">Confirm Password</CLabel>
                                <CInput id="confirmPassword" placeholder="Enter your confirm password" />
                            </CFormGroup>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Change my password</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" sm="2">
                </CCol>
            </CRow>
        </>
    )
}

export default ChangePassword
