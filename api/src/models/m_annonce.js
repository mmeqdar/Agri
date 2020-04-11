const { USERS } = require('../../config/const').REQ;
const Database = require('./dt');

class Annonce {
    constructor() 
    {
        this.database = new Database();
    }
    annonce(des,quantity,prix,id_category,type_annonce)
    {
        console.log("-------model------")
        return new Promise((resolve, reject) => (
            this.database.query(USERS.ADD_ANNONCE,[des,quantity,prix,id_category,88,type_annonce])
            .then((r)=>
            {
                console.log("-------model------")
                console.log(r)
                resolve(r)
            })
            .catch((err)=>
            {
                resolve({status :'failure',data :"GENERAL"})
            })
        ))
    }
    pic(file,id_annonce,i)
    {
        return new Promise((resolve, reject) => (
            this.database.query(USERS.ADD_IMAGE,[file,id_annonce,i])
            .then(() => {
            })
            .catch((err => {
                return reject(err)
                })
              )
            ))
    }
    /*---------------------Category------------------*/
    getCategorie()
    {
        return new Promise((resolve, reject) => ( 
            this.database.query(USERS.GET_CATEGOY)
            .then((r)=>
            {
                resolve(r)
            })
            .catch((err)=>
            {
                console.log(err)
                resolve({status :'failure',data :"GENERAL"})
            })
        ))
    }
}
module.exports = Annonce