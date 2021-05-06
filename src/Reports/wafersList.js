import React, { useEffect, useState } from 'react'
import { HttpAuthHelper } from "../helper/HTTPHelper";
import { STATUS_CREATE, GET_ACTIVE_STATUS } from "../helper/APIConfig"
import { Icons } from "../assets/icons/index"
import { getActiveWafersList } from "../services/list"

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


const WafersReport = () => {

    const [wafersList, setWafersList] = useState([]);

    useEffect(() => {
        getWafersList();
    }, []);

    const getWafersList = () => {
        const wafers = getActiveWafersList().then((res) => {
            setWafersList(res.data);
            console.log(res.data);
            
        });
    }

   

    return (
        <>
            <CRow>

                <CCol xs="12" sm="12">
                    <CCard>
                        <header class="card-header">Wafers Reports</header>
                        <CCardBody>

                            <div className="position-relative table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            {/* <th>Company Name</th> */}
                                            <th>#Lot</th>
                                            <th>Layer</th>
                                            <th>HighPriority</th>
                                            <th>Url</th>
                                            <th>Remarks</th>
                                            <th>Status</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wafersList.map((wafers, index) => (
                                            <tr key={wafers.id}>
                                                <td>{index + 1}</td>
                                                {/* <td>{wafers.companyId}</td> */}
                                                <td>{wafers.lot}</td>
                                                <td>{wafers.layer}</td>
                                                <td>{wafers.highPriority ? <span class="badge badge-success">Active</span> : <span class="badge badge-danger">InActive</span>}</td>
                                                <td>{wafers.url}</td>
                                                <td>{wafers.remarks}</td>
                                                <td>  <span class="badge badge-warning">Pending</span></td>
                                                {/* {wafers.statusId} */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="pagination" ><ul class="pagination justify-content-start"><li class="page-item disabled"><a href="" class="disabled page-link" aria-label="Go to first page" aria-disabled="true">«</a></li><li class="page-item disabled"><a href="" class="disabled page-link" aria-label="Go to previous page" aria-disabled="true">‹</a></li><li class="active page-item"><a href="#" class="page-link" aria-label="Current page 1">1</a></li><li class=" page-item"><a href="" class="page-link" aria-label="Go to page 2">2</a></li><li class=" page-item"><a href="" class="page-link" aria-label="Go to page 3">3</a></li><li class=" page-item"><a href="" class="page-link" aria-label="Go to page 4">4</a></li><li class=" page-item"><a href="" class="page-link" aria-label="Go to page 5">5</a></li><li class="page-item"><a href="#" class="page-link" aria-label="Go to next page" aria-disabled="false">›</a></li><li class="page-item"><a href="" class="page-link" aria-label="Go to last page" aria-disabled="false">»</a></li></ul></nav>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>

            </CRow>
        </>

    )
}

export default WafersReport