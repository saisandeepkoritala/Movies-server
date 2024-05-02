const express = require("express");
const cors=require("cors");
const getMovies = require("./apis/getMovies");
const getDetails = require("./apis/getDetails");
const getCredits = require("./apis/getCredits");
const getActorInfo = require("./apis/getActorInfo");
const getByCountry= require("./apis/getByCountry");
const getLanguage = require("./apis/getLanguage");
const getCustomMovies= require("./apis/getCustomMovies");
const getTv = require("./apis/getTv");
const getTvDetail = require("./apis/getTvDetail");
const getTvCrew = require("./apis/getTvCrew");
const getPics = require("./apis/getPics");
const getSearchMovie= require("./apis/getSearchMovie");
const getMovieVideo = require("./apis/getMovieVideo");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/isAlive",async(req,res)=>{
    try{
        res.json({
            status:"Success",
            message:"Server is Up"
        })
    }
    catch(e){
        res.json({
            status:"Fail",
            message:"Server is down"
        })
    }
})

app.use("/getTeluguMovies",async(req,res)=>{
    const response = await getMovies("te")

    if(response.error){
        res.json({
            status:"Fail",
            error:response.error
        })
    }
    else{
        res.json({
            status:"success",
            Movies:response
        })
    }
})

app.use("/getHindiMovies",async(req,res)=>{
    const response = await getMovies("hi")

    if(response.error){
        res.json({
            status:"Fail",
            error:response.error
        })
    }
    else{
        res.json({
            status:"success",
            Movies:response
        })
    }
})

app.use("/getTamilMovies",async(req,res)=>{
    const response = await getMovies("ta")

    if(response.error){
        res.json({
            status:"Fail",
            error:response.error
        })
    }
    else{
        res.json({
            status:"success",
            Movies:response
        })
    }
})

app.use("/getDetails",async(req,res)=>{
    if(req.body.id){
    const response = await getDetails(req.body.id);
    res.json({
        status:"success",
        statusCode:200,
        Movies:response
    })
    }
    else{
        res.json({
            status:"Fail",
            statusCode:400,
            error:"Movie id needed"
        })
    }
})

app.use("/getCredits",async(req,res)=>{
    if(req.body.id){
    const response = await getCredits(req.body.id);
    res.json({
        status:"success",
        statusCode:200,
        Movies:response
    })
    }
    else{
        res.json({
            status:"Fail",
            statusCode:400,
            error:"Movie id needed"
        })
    }
})

app.use("/getActorInfo",async(req,res)=>{
    if(req.body.id){
    const response = await getActorInfo(req.body.id);
    res.json({
        status:"success",
        statusCode:200,
        Movies:response
    })
    }
    else{
        res.json({
            status:"Fail",
            statusCode:400,
            error:"Movie id needed"
        })
    }
})

app.use("/getByCountry",async(req,res)=>{
    const response = await getByCountry();
    res.json({
        status:"success",
        statusCode:200,
        Movies:response
    })
    })

app.use("/getLanguage",async(req,res)=>{
    const response = await getLanguage();
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })
    
app.use("/getCustomMovies",async(req,res)=>{
    const {year,language,country,page,selectDate,selectDate1}=req.body
    const response = await getCustomMovies(year,country,language,page,selectDate,selectDate1);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })

app.use("/getTv",async(req,res)=>{
    const {year,page,selectDate,selectDate1,country,language}=req.body
    const response = await getTv(page,selectDate,selectDate1,country,language);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })
                
app.use("/getTvDetail",async(req,res)=>{
    const response = await getTvDetail(req.body.id);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })

app.use("/getTvCrew",async(req,res)=>{
    const response = await getTvCrew(req.body.id);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })

app.use("/getPics",async(req,res)=>{
    const response = await getPics(req.body.id);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })

app.use("/getSearchMovie",async(req,res)=>{
    const {searchTerm,language,page,country}=req.body;
    const response = await getSearchMovie(searchTerm,language,page,country);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })    

app.use("/getMovieVideo",async(req,res)=>{
    const response = await getMovieVideo(req.body.id);
    res.json({
            status:"success",
            statusCode:200,
            Movies:response
    })
    })      
app.listen("5000",(req,res)=>{
    console.log("running ")
})

