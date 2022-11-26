import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         const originalRequest = error.congi;
//         if (error.response.status === 403) {
//             return Promise.reject(
//                 "No tiene permiso necesario para realizar la opreción"
//             );
//         }
//         if (error.response.status === 400 && !originalRequest._retry) {
//             return Promise.reject(
//                 "Ha ocurrido un error. Espero unos minutos e intente nuevamente"
//             )
//         }
//         if (error.response.status === 401) {
//             localStorage.removeItem("token")
//             return Promise.reject(
//                 "No tiene autorizacion"
//             );
//         }
//     }
// );


export default API;





