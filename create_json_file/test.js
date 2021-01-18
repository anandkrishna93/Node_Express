//import axios from 'axios';
const axios = require("axios");
const fs = require("fs");


async function getDetails () {
    const arrayList = [1,7,9,11];
    try {
        for(let i=0; i<arrayList.length; i++) {
            const res = await axios.get(`https://gorest.co.in/public-api/users?page=${i}`);
            
            
            fs.writeFile(`file${arrayList[i]}.json`, JSON.stringify(res.data), (err) => {
                // When a request is aborted - the callback is called with an AbortError
            });
        }
        //console.log(res.data)
    } catch(e) {
        console.log(e)
    }

}

getDetails();