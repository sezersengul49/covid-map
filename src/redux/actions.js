import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../constants";

 export const getCountryData= createAsyncThunk("covid/getCountryData", 
 async({code,query })=> {
    const params={iso: code, q:query};

//ülkenin covid bilgilerini al
const req1 =  axios.get('https://covid-19-statistics.p.rapidapi.com/reports',{params, headers}

)
const req2= axios.get(
code 
?
`https://restcountries.com/v3.1/alpha/${code}`
: `https://restcountries.com/v3.1/name/${query}`
)

//2 api isteigni aynı anda at
const responses =await Promise.all([req1,req2])

//verileri nesne içwerisine dagıt
const covid= {

    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
    
}
//gereksiz degerleri kaldır
delete covid.region;
delete covid.cities;

console.log(covid)
return {covid, country: responses[1].data[0]};
})