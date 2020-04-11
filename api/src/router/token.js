const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

function token(token)
{
    return new Promise((resolve, reject) => {
    if (!token) {
        console.log("No token provided")
        //res.status(401);
        resolve("-2")
    }
    try {
        const decoded = jwt.verify(token, "mmeqfall")
        console.log(decoded.id)
        resolve(decoded.id)
    } catch (ex) {
        console.log("Invalid token.")
        //res.status(401);
        resolve('-2');
    }
})
}
function type(token)
{
    return new Promise((resolve, reject) => {
    if (!token) {
        //res.status(401);
        resolve("-2")
    }
    try {
        const decoded = jwt.verify(token, "mmeqfall")
        resolve(decoded.type)
    } catch (ex) {
        //res.status(401);
        resolve('-2');
    }
})
}
const check_token =  router.post('/check_token', function (req, res) {
console.log(req.body.token)
token(req.body.token).then((r)=>{
    res.send({data:r})
})
})
const check_type =  router.post('/check_type', function (req, res) {
    type(req.body.type).then((r)=>{
        res.send({data:r})
    })
    })
module.exports= check_token