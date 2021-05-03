import React, { useEffect, useState } from 'react'
import { HttpAuthHelper } from "../../src/helper/HTTPHelper";
import { CREATE_COMPANY } from "../../src/helper/APIConfig"
import { getActiveCompanyList, getActiveStatusList } from "../services/list"

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
import { Input } from "reactstrap";

const WafersForms = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    const [lot, setLot] = React.useState("");
    const [layer, setLayer] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [remarks, setRemarks] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [contactNo, setContactNo] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [companyList, setCompanyList] = useState([]);

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

    useEffect(() => {
        getCompanyList();
    }, []);

    const getCompanyList = () => {
        const company = getActiveCompanyList().then((res) => {

        });
    }

    const getStatusList = () => {
        const status = getActiveStatusList().then((res) => {
            // setStausList(res.data);

        });
    }

    const ClearProcess = (e) => {
        e.target.reset();
    }


    return (
        <>
            <CRow>
                <CCol xs="12" sm="2">
                </CCol>
                <CCol xs="12" sm="8">
                    <CCard>
                        <CCardHeader>
                            Wafers
              <small> Details</small>
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup>
                                <CLabel htmlFor="lot">#Lot</CLabel>
                                <CInput id="lot" placeholder="Enter your lot" onChange={e => setLot(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="layer">Layer</CLabel>
                                <CInput id="layer" placeholder="Enter your layer" onChange={e => setLayer(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="url">Url</CLabel>
                                <CInput id="url" placeholder="Enter your url" onChange={e => setUrl(e.target.value)} />
                            </CFormGroup>
                            <CFormGroup row className="my-0">
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="email">Company Name</CLabel>
                                        <select class="custom-select" name="select" id="select"  >
                                            <option value="0">Please select company name</option>
                                        </select>
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="mobile">Statu Type</CLabel>
                                        <select class="custom-select" name="select" id="select">
                                            <option value="0">Please select status type</option>
                                        </select>
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup>
                                <CLabel htmlFor="email">Wafers Images</CLabel>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="remarks">Remarks</CLabel>
                                <CInput id="remarks" placeholder="Enter your remarks" onChange={e => setRemarks(e.target.value)} />
                            </CFormGroup>

                            <CFormGroup row className="my-0">
                                <CCol xs="6" sm="4">
                                    <CLabel htmlFor="new">HighPriority</CLabel>
                                </CCol>
                                <CCol xs="6" sm="2">
                                    <Input className="checkbox" type="Checkbox" size="sm" required />
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" color="primary" onClick={() => CompanyProcess()} ><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger" onClick={(e) => ClearProcess()}><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" sm="2">
                </CCol>
            </CRow >
        </>
    )
}

export default WafersForms
