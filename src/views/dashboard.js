import React, { lazy } from 'react'
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

const Dashboard = () => {
  return (

    <CContainer>
      <CRow className="justify-content-center">
        <CCol lg="12">
          <CRow>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-primary">
                <div className="card-body pb-0 d-flex justify-content-between">
                  <div>
                    <div className="text-value-lg">
                      <div>
                        <span className="m-0">Total Inspectors</span>
                        <p>4555</p>
                        <div>
                        <CIcon name="cil-settings" /> 
                        <span> Users</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-warning ">
                <div className="card-body pb-0 d-flex justify-content-between">
                  <div>
                    <div className="text-value-lg">
                      <div>
                        <span className="m-0">Total Inspectors</span>
                        <p>4555</p>
                        <div>
                        <CIcon name="cil-pencil" /> 
                        <span> Wafers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-danger ">
                <div className="card-body pb-0 d-flex justify-content-between">
                  <div>
                    <div className="text-value-lg">
                      <div>
                        <span className="m-0">Total Inspectors</span>
                        <p>4555</p>
                        <div>
                        <CIcon name="cil-user" /> 
                        <span> Users</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-info ">
                <div className="card-body pb-0 d-flex justify-content-between">
                  <div>
                    <div className="text-value-lg">
                      <div>
                        <span className="m-0">Total Inspectors</span>
                        <p>4555</p>
                        <div>
                        <CIcon name="cil-settings" /> 
                        <span> Users</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Dashboard



