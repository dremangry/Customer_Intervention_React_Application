
/*We also have methods for retrieving data from server. In the case we access protected resources, the HTTP request needs Authorization header.

The code checks Local Storage for user item. If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.

Let’s create a helper function called authHeader() inside auth-header.js:*/

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access_token) {
        return { Authorization: 'Bearer ' + user.access_token };
    } else {
        return {};
    }
}