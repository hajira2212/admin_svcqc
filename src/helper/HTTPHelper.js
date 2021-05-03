export function HttpHelper(url, method, body) {
    return fetch(url, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 600000,
        body: body
    })
        .then(response => response.json())
        .catch(e => console.log(e))
}

export function HttpAuthHelper(url, method, body) {
    const token = GetToken();
    return fetch(url, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': token,
        },
        timeout: 600000,
        body: body
    })
        .then(response => {
            if (response != null) {
                if (response.status == 403) {
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('userName');
                    window.location = '/#/home';
                }
                else {
                    return response.json()
                }
            }
        }
        )
        .catch(e => console.log(e))
}


export function HttpFormDataHelper(url, method, body) {
    const token = GetToken();
    return fetch(url, {
        method: method,
        headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/json',
            'x-auth-token': token,
        },
        timeout: 600000,
        body: body
    })
        .then(response => response.json())
        .catch(e => console.log(e))
}

function GetToken() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser !== null && currentUser !== "") {
        var user = JSON.parse(currentUser);
        if (user != null) {
            return user.token;
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}