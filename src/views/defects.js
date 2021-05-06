import React, { useEffect, useState } from 'react'
import { HttpFormDataHelper } from "../helper/HTTPHelper";
import { DEFECTS_CREATE } from "../helper/APIConfig"
import { Icons } from "../assets/icons/index"
import { getActiveDefectsList } from "../services/list"


import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    table,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CInputCheckbox,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Modal, ModalBody, Button, ModalFooter, ModalHeader, Input } from "reactstrap";


const DefectsMaster = () => {

    const [modal, setModal] = React.useState(false);
    const toggleModal = () => setModal(!modal);
    const [is_Active, setis_Active] = React.useState(true);
    const [defectsType, setDefectsType] = React.useState("");
    const [defectsList, setDefectsList] = useState([]);
    const [message, setMessage] = React.useState("");
    const [file, setFile] = React.useState(0)


    const openModal = () => {
        //this.setState({ showModal: true });
        setModal(!modal);
    }

    const getDefectsList = () => {

        const defects = getActiveDefectsList().then((res) => {
            setDefectsList(res.data);
        });
    }

    useEffect(() => {
        getDefectsList();
    }, []);

    const handleChange = (e) => {

        // to get the checked value
        is_Active = e.target.value;
    };
  
    const Add_Defects = (defectsType, is_Active) => {

        if (defectsType != "" && file != 0) {

            const defects_image = file;
            const formData = new FormData();
            formData.append("defectsType", defectsType);
            formData.append("is_Active", is_Active);
            formData.append("defects_image", defects_image);

            let defects = HttpFormDataHelper(DEFECTS_CREATE, "POST", formData);
            defects.then(response => {
                if (response) {
                    alert(response.message);
                    toggleModal();
                    defectsType = "";
                }
                else {
                    alert(response.message);
                    defectsType = "";
                }


            });
        }
        else {
            alert("Please fill out this field!");
        }
    }

    return (
        <>
            <CRow>

                <CCol xs="12" sm="12">
                    <CCard>
                        <header class="card-header">Defects Master<div class="card-header-actions">  <button type="button" class="btn btn-primary" onClick={openModal} data-toggle="modal" data-target=".bd-example-modal-lg">Add Defects </button></div></header>
                        <CCardBody>

                            <div className="position-relative table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Defects Type</th>
                                            <th>Is Active</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {defectsList.map((defects, index) => (
                                            <tr key={defects.id}>
                                                <td>{index + 1}</td>
                                                <td>{defects.defectsType}</td>
                                                <td>{defects.is_Active ? <span class="badge badge-success">Active</span> : <span class="badge badge-danger">InActive</span>}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>

            </CRow>
            <Modal isOpen={modal} toggle={toggleModal} size="md">
                <ModalHeader>
                    <h5>Add Defects Type</h5>
                </ModalHeader>
                <ModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="defectstype">Defects Type</CLabel>
                        <CInput id="defectstype" placeholder="Enter defects type" required onChange={e => setDefectsType(e.target.value)} />
                    </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="defectstype">Defects Image</CLabel>
                        <input type="file" onChange={e => setFile(e.target.files[0])} id="fileItem" className="form-control" />
                    </CFormGroup>
                    <CFormGroup>
                        <CCol xs="12" sm="4">
                            <CLabel htmlFor="new">Is Active?</CLabel>
                        </CCol>
                        <CCol xs="12" sm="2">
                            <Input className="checkbox" type="Checkbox" size="sm" required onChange={e => handleChange} />

                        </CCol>

                    </CFormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal} className='btn btn-secondary'>Close</Button>
                    <button className='btn btn-primary' onClick={() => Add_Defects(defectsType, is_Active)}>Save</button>
                </ModalFooter>
            </Modal>
        </>

    )
}

export default DefectsMaster
