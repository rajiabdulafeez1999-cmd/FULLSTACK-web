import { useState, useEffect } from "react";
import axios from "axios";
// Custom Hook
function useFetch(url) {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] =useState(false);

   useEffect(() =>{
    const getTitle = async() => {
        try {
       const res = await axios.get(url);
         console.log(res);
         setData(res.data);
         setLoading(false);
         setError(false)
        }
        catch (err){
            setLoading(false);
            setError(err.message);
        }
       
    };
    getTitle();
   },[url]);

   return{data , loading, error};
};
export default useFetch;