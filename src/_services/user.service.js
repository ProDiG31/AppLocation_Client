import config from 'config';
import { authHeader } from '../_helpers';
import { createECDH } from 'crypto';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

const url = `http://localhost:3030`;

function login(username, password) {
    const requestOptions = {
        mode: 'cors',
        method: 'POST',
        cache: 'default',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(url + '/auth/login', requestOptions)
        .then(data => data.json())
        .then(handleResponse)
        .then(res => {
            console.log('then')

            const { user } = res; 
            const { token } = user;

            // login successful if there's a jwt token in the response
            if (token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        }
    )
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        mode: 'cors',
        method: 'GET',
        cache: 'default',
        headers: authHeader()
    };

    return fetch(`${url}/users`, requestOptions)
    .then(data => data.json())
    .then(handleResponse)
    .then(
        data => {
            const { users } = data;
            return users;
        }
    );
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${url}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${url}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${url}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${url}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log('Handle');
    console.log(response)

    if (!response.ok) {
        console.log('nok')
        // if (response.status !== 200) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            location.reload(true);
        }
        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }

    console.log('ok');
    return Promise.resolve(response);

}