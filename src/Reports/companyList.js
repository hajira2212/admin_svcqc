import React, { useEffect, useState } from 'react'
import { HttpAuthHelper } from "../helper/HTTPHelper";
import { STATUS_CREATE, GET_ACTIVE_STATUS } from "../helper/APIConfig"
import { Icons } from "../assets/icons/index"
import { getActiveCompanyList } from "../services/list"

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


const CompanyReport = () => {

  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    getCompanyList();
  }, []);

  const getCompanyList = () => {
    const company = getActiveCompanyList().then((res) => {
      setCompanyList(res.data);
      console.log(res.data);
    });
  }

  return (
    <>
      <CRow>

        <CCol xs="12" sm="12">
          <CCard>
            <header class="card-header">Company Reports</header>
            <CCardBody>

              <div className="position-relative table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Company Code</th>
                      <th>Company Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {companyList.map((company, index) => (
                      <tr key={company.id}>
                        <td>{index  + 1}</td>
                        <td>{company.companyCode}</td>
                        <td>{company.companyName}</td>
                        <td>{company.email}</td>
                        <td>{company.address}</td>
                        <td><span class="badge badge-success">Active</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <nav aria-label="pagination" ><ul class="pagination justify-content-start"><li class="page-item disabled"><a href="#" class="disabled page-link" aria-label="Go to first page" aria-disabled="true">«</a></li><li class="page-item disabled"><a href="#" class="disabled page-link" aria-label="Go to previous page" aria-disabled="true">‹</a></li><li class="active page-item"><a href="#" class="page-link" aria-label="Current page 1">1</a></li><li class=" page-item"><a href="#" class="page-link" aria-label="Go to page 2">2</a></li><li class=" page-item"><a href="#" class="page-link" aria-label="Go to page 3">3</a></li><li class=" page-item"><a href="#" class="page-link" aria-label="Go to page 4">4</a></li><li class=" page-item"><a href="#" class="page-link" aria-label="Go to page 5">5</a></li><li class="page-item"><a href="#" class="page-link" aria-label="Go to next page" aria-disabled="false">›</a></li><li class="page-item"><a href="#" class="page-link" aria-label="Go to last page" aria-disabled="false">»</a></li></ul></nav>
              </div>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </>

  )
}

export default CompanyReport