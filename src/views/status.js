import React, { useEffect, useState } from 'react'
import { HttpAuthHelper } from "../helper/HTTPHelper";
import { STATUS_CREATE, STATUS_DELETE } from "../helper/APIConfig"
import { Icons } from "../assets/icons/index"
import { getActiveStatusList, getStatusByStatusId } from "../services/list"


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


const StatusMaster = () => {

    const [modal, setModal] = React.useState(false);
    const toggleModal = () => setModal(!modal);
    const [editmodal, setEditModal] = React.useState(false);
    const EdittoggletModal = () => setModal(!editmodal);

    const [is_Active, setis_Active] = React.useState(true);

    const [statusType, setStatusType] = React.useState("");
    const [statusEditType, setStatusEditType] = React.useState("");
    const [statusList, setStausList] = useState([]);
    const [statusId, setStatusId] = React.useState("");

    const openModal = () => {
        //this.setState({ showModal: true });
        setModal(!modal);
    }
    const openEditModal = () => {
        //this.setState({ showModal: true });
        setEditModal(!editmodal);
    }

    useEffect(() => {
        getStatusList();
    }, []);

    const getStatusList = () => {

        const status = getActiveStatusList().then((res) => {
            setStausList(res.data);
        });
    }

    const getStatusById = (statusId) => {

        const data_items = getStatusByStatusId => {
        }
    }

    const handleChange = (e) => {

        // to get the checked value
        is_Active = e.target.value;
    };

    const Add_Status = (statusType, is_Active) => {

        if (statusType != "") {

            var credential = JSON.stringify({ statusType, is_Active });
            let status = HttpAuthHelper(STATUS_CREATE, "POST", credential);
            status.then(response => {
                if (response) {
                    alert(response.message);
                    toggleModal();
                    statusType = "";
                }
                else {
                    alert(response.message);
                    statusType = "";
                }
                getStatusList();

            });
        }
        else {
            alert("Please fill out this field!");
        }
    }

    const getDeleteStatus = (statusId) => {

        var result = alert("Are you sure you want to delete?");

        let status = HttpAuthHelper(STATUS_DELETE + "/" + statusId, "GET", null);
        status.then(response => {
            if (response) {
                alert(response.message);
                getStatusList();
            }
            else {
                alert(response.message);
            }
        })
    }



    return (
        <>
            <CRow>

                <CCol xs="12" sm="12">
                    <CCard>
                        <header class="card-header">Status Master<div class="card-header-actions">  <button type="button" class="btn btn-primary" onClick={openModal} data-toggle="modal" data-target=".bd-example-modal-lg">Add Status Type</button></div></header>
                        <CCardBody>

                            <div className="position-relative table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Status Type</th>
                                            <th>Is Active</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {statusList.map((status, index) => (
                                            <tr key={status.id}>
                                                <td>{index + 1}</td>
                                                <td>{status.statusType}</td>
                                                <td>{status.is_Active ? <span class="badge badge-success">Active</span> : <span class="badge badge-danger">InActive</span>}</td>

                                                <td>  <span class="badge badge-primary" onClick={() => getStatusById(status.id)}>Edit  </span>  &nbsp;
                                                    <span class="badge badge-danger" onClick={() => getDeleteStatus(status.id)}>    Delete</span></td>
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
                    <h5>Add Status Type</h5>
                </ModalHeader>
                <ModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="statustype">Status Type</CLabel>
                        <CInput id="statusType" placeholder="Enter status type" required onChange={e => setStatusType(e.target.value)} />
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
                    <button className='btn btn-primary' onClick={() => Add_Status(statusType, is_Active)}>Save</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={editmodal} toggle={EdittoggletModal} size="md">
                <ModalHeader>
                    <h5>Edit Status Type</h5>
                </ModalHeader>
                <ModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="statustype">Edit Status Type</CLabel>
                        <CInput id="statusType" placeholder="Enter status type" required onChange={e => setStatusEditType(e.target.value)} />
                    </CFormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={EdittoggletModal} className='btn btn-secondary'>Close</Button>
                    <button className='btn btn-primary' onClick={() => Add_Status(statusType, is_Active)}>Update</button>
                </ModalFooter>
            </Modal>

        </>

    )
}

export default StatusMaster
