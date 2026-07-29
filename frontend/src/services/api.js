import axios from "axios";
 const BASE_URL=import.meta.env.VITE_BASE_URL;
      
const api = axios.create({
  baseURL: `${BASE_URL}`
});

export default api;

// import axios from "axios";


// const api = axios.create({

//     baseURL:"http://localhost:5000/api"

// });


// // Automatically attach JWT

// api.interceptors.request.use(
//     (config)=>{

//         const token =
//         localStorage.getItem("token");


//         if(token){

//             config.headers.Authorization =
//             `Bearer ${token}`;

//         }


//         return config;

//     },

//     (error)=>Promise.reject(error)
// );


// export default api;