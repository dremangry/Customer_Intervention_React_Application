
/*The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important functions:

login(): POST {email, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
getCurrentUser(): get stored user information (including JWT)
*/

import axios from "axios";
// const API_URL = "http://localhost:8080/api/auth/";
const API_AUTH_URL = "https://thisisrocketelevatorsjava.herokuapp.com/authenticate";
// const API_AUTH_URL = "http://localhost:3500/authentication/2/";

const login = (email, password) => {
    return axios
        .post(API_AUTH_URL, {
            email: email,
            password: password
        })
        .then((response) => {
            console.log('$$$$$$$$$$$$$$yup');
            console.log('yes#########');
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
    // register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;