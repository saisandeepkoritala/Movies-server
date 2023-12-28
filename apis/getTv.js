const fetch = require('node-fetch');

const getTv=async(page,selectDate,selectDate1,country,language)=>{

    const props={"first_air_date.gte":selectDate,"first_air_date.lte":selectDate1,"with_origin_country":country,"with_original_language":language,"page":page}

    let url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US"

    for(let i in props){
    if(props[i]){
        url=url+"&"+i+"="+props[i]
    }
    }

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
module.exports = getTv;

