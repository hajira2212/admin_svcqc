import React, { useEffect, useState } from 'react'
import { HttpFormDataHelper } from "../../src/helper/HTTPHelper";
import { WAFERS_CREATE } from "../../src/helper/APIConfig"
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
    const [highPriority, setHighPriority] = React.useState(true);
    const [selectStatus, setSelectStatus] = React.useState(0);
    const [selectCompany, setSelectCompany] = React.useState(0);

    const [message, setMessage] = React.useState("");
    const [companyList, setCompanyList] = useState([]);
    const [statusList, setStausList] = useState([]);
    const [wafersImage, setWafersImage] = useState();


    const WafersProcess = (lot, layer, url, remarks, selectCompany, selectStatus, wafersImage) => {

        if (lot != "" && layer != "" && url != "" && remarks != "") {

            const formData = new FormData();
            formData.append("wafersImage", wafersImage);
            formData.append("lot", lot);
            formData.append("layer", layer);
            formData.append("url", url);
            formData.append("highPriority", highPriority);
            formData.append("is_Active", true);
            formData.append("remarks", remarks);
            formData.append("companyId", selectCompany);
            formData.append("statusId", selectStatus);

            let add = HttpFormDataHelper(WAFERS_CREATE, "POST", formData);
            add.then(response => {
                if (response) {
                    alert(response.message);
                    window.location.href = `${process.env.PUBLIC_URL} /#/reports/wafers`

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

    const handleChange = (e) => {

        // to get the checked value
        highPriority = e.target.value;
    };

   

    const handleImages = (e) => {
        if (e.target.files) {
            setWafersImage({ ...wafersImage, ...e.target.files });
        }
    };

    const selectStatusChange = (e) => {

        selectStatus = e.target.value;
    };

    const selectCompanyChange = (e) => {

        selectCompany = e.target.value;
    };


    useEffect(() => {
        getCompanyList();
        getStatusList();
    }, []);

    const getCompanyList = () => {
        const company = getActiveCompanyList().then((res) => {
            setCompanyList(res.data);
        });
    }

    const getStatusList = () => {
        const status = getActiveStatusList().then((res) => {
            setStausList(res.data);
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
                                        <select class="custom-select" name="select" id="select" onChange={e => setSelectCompany(e.target.value)}>
                                            <option value="0">Please select company name</option>
                                            {companyList.map(company => (
                                                <option
                                                    value={company.id}
                                                >
                                                    {company.companyName}
                                                </option>
                                            ))}
                                        </select>
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="mobile">Statu Type</CLabel>
                                        <select class="custom-select" name="select" id="select" onChange={e => setSelectStatus(e.target.value)}>
                                            <option value="0">Please select status type</option>
                                            {statusList.map(status => (
                                                <option
                                                    value={status.id}
                                                >
                                                    {status.statusType}
                                                </option>
                                            ))}

                                        </select>
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup>
                                <CLabel htmlFor="image">Wafers Images</CLabel>
                                <input type="file" className="form-control" multiple onChange={handleImages} />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="remarks">Remarks</CLabel>
                                <CInput id="remarks" placeholder="Enter your remarks" onChange={e => setRemarks(e.target.value)} />
                            </CFormGroup>

                            <CFormGroup row className="my-0">
                                <CCol xs="6" sm="2">
                                    <CLabel htmlFor="new">HighPriority</CLabel>
                                </CCol>
                                <CCol xs="6" sm="2">
                                    <Input className="checkbox" type="Checkbox" size="sm" required onChange={e => handleChange} />
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" color="primary" onClick={() => WafersProcess(lot, layer, url, remarks, selectCompany, selectStatus, wafersImage)} ><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger" onClick={(e) => ClearProcess()}><CIcon name="cil-ban" /> Reset</CButton>
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
