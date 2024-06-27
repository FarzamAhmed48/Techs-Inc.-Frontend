// import axios from "axios";
// import { useContext } from "react";
// import { AppContext } from "./Context";

// const params = {
//     headers: {
//         Authorization: "bearer " + import.meta.env.VITE_ECOM_KEY
//     },
// }
// // export const fetchDataFromApi= async (url)=>{
// //     try {
// //         const {data} = await axios.get(import.meta.env.VITE_BASE_URL + url,params).then(res => console.log(res));
// //         console.log(data)
// //     } catch (error) {
// //         console.log(error)
// //         return error
// //     }
// // }

// export const fetchDataFromApi = async(url)=>{
//     // const {setCategories}=useContext(AppContext)
//     try {
//         const data= await fetch(import.meta.env.VITE_BASE_URL + url, params)
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }