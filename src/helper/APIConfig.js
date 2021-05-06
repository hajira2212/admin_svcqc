let url = "/api/";


//User
export const LOGIN = url + "user/login";
export const LOGIN_COMPANY = url + "company/login";
export const STATUS_CREATE = url + "session/status/create";
export const DEFECTS_CREATE = url + "session/defects/create";
export const CREATE_COMPANY = url + "company/create";
export const GET_ACTIVE_STATUS = url + "session/status/getActiveStatus";

export const USER_CREATE = url + "user/create";
export const GET_SIGNED_IN_USER_DETAILS = url + "session/user";
export const PUT_USER = url + "user/update";
export const CHANGE_PASSWORD = url + "session/user/change/password";
export const PUT_USER_IMAGE = url + "session/defects/getDefects";
export const WAFERS_CREATE = url + "session/wafers/create";
export const STATUS_DELETE = url + "session/status/delete";



export class GlobalConstants {
    static ADMIN_USER = "ROLE_ADMIN";
    static ROLE_SUPER_USER = "ROLE_SUPER_USER";

}
