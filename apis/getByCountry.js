const fetch = require('node-fetch');

const getByCountry=async()=>{
    const url = "https://api.themoviedb.org/3/configuration/countries?language=en-US";
    
    const options = {
        method: 'GET',
        headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNThiMWU1YzE1YWIxMDU1ZTA3MjEwNmFjMzk2MTM5NyIsInN1YiI6IjY1NmJjZjliY2VkZTY5MDBlNWJiNmFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7C4XdLSGKloVC4hgkt4VVzynra1tI4Tky_gLFXuCirU'
            }
        };
            
    const response = await fetch(url, options)
        .then(res => res.json())
        .then(json => {return json})
        .catch(err => {
                return ({
                        status:"Fail",
                        error:err
                    })
                });
    
        return response;
    }
    module.exports = getByCountry;
    
    