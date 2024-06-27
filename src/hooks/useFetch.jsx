import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../utils/Context'

const useFetch = (endpoint) => {
    const {fetchDataFromApi}=useContext(AppContext)
    const [data,setData]=useState()
    useEffect(()=>{
        makeApiCall()
    },[endpoint])
  const makeApiCall=async()=>{
    const res= await fetchDataFromApi(endpoint)
    setData(res)
  }

  return {data}
}

export default useFetch;
