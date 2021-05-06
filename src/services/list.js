
import axios from "axios";
const Api_url = "/api/";
const token = localStorage.getItem("token");

const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
    },
};

export const getActiveWafersList = () => {

    return axios.get(`${Api_url}session/wafers/getActiveWafers`, config);
};

export const getActiveCompanyList = () => {
    return axios.get(`${Api_url}admin/getcompanyUser`);
};

export const getActiveStatusList = () => {

    return axios.get(`${Api_url}session/status/getActiveStatus`, config);
};

export const getActiveDefectsList = () => {

    return axios.get(`${Api_url}session/defects/getActiveDefects`, config);
};

export const getStatusByStatusId = () => {

    return axios.get(`${Api_url} session/status/getStatusBy/{statusId}`, config);
};


