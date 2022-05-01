
/*The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important functions:

login(): POST {email, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
getCurrentUser(): get stored user information (including JWT)
*/

import axios from "axios";
import querystring from "query-string"
// const API_URL = "http://localhost:8080/api/auth/";
const API_AUTH_URL = "https://thisisrocketelevatorsjava.herokuapp.com/authenticate";
// const API_USER_URL = "https://thisisrocketelevatorsjava.herokuapp.com/interventions/customer?customerId=1";
const API_USER_URL = "https://rocketelevatorsweek8.azurewebsites.net/api/intervention/pending";
// const API_AUTH_URL = "http://localhost:3500/authentication/2/";

const login = (email, password) => {

    axios.get("https://thisisrocketelevatorsjava.herokuapp.com/users/hello").then(response => console.log(response.data));
    console.log(email)
    console.log(password)

    return axios
        .post(API_AUTH_URL, querystring.stringify({
            email: email,
            password: password
        }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
        .then((response) => {
            console.log(response.data);
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
// const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// };
const getCurrentUser  = () =>  {
    
    return  axios.get(API_USER_URL).then(response => console.log(response.data));
};

const AuthService = {
    // register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;