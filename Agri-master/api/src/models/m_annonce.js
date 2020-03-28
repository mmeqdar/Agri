const { USERS } = require('../../config/const').REQ;
const Database = require('./dt');

class Annonce {
    constructor() 
    {
        this.database = new Database();
    }
    annonce(des,quantity,prix,id_category)
    {
        return new Promise((resolve, reject) => (
            this.database.query(USERS.ADD_ANNONCE,[des,quantity,prix,id_category,1])
            .then((r)=>
            {
                resolve(r)
            })
            .catch((err)=>
            {
                resolve({status :'failure',data :"GENERAL"})
            })
        ))
    }
    pic(file,id_annonce)
    {
        return new Promise((resolve, reject) => (
            this.database.query(USERS.ADD_IMAGE,[file,id_annonce])
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
            this.database.query(USERS.GET_CATEGORY)
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