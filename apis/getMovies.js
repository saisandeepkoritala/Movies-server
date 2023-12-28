const fetch = require('node-fetch');

const getMovies=async(language)=>{
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_origin_country=IN&with_original_language=${language}`;

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
module.exports = getMovies;

