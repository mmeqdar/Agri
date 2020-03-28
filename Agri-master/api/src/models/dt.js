const mysql = require('mysql')
const DATABASE  = require('../../config/config')

class Database {
    constructor() {
      this.cn = {
        host: DATABASE.host,
        user: DATABASE.user,
        password: DATABASE.password,
        database: DATABASE.database,
      }
      this.connection = this.createConnection()
    }
    createConnection() 
    {
        return mysql.createConnection(this.cn)
    }
    query(sql, args) 
    {
        if (this.connection === null) this.connection = this.createConnection()
        return new Promise((resolve, reject) => {
        this.connection.query(sql, args, async (err, rows) => {
            try {
            await this.close()
            } catch (e) {
            console.error()
            }
            if (err) return reject(err)
            return resolve(rows)
        })
        })
  }
  close() 
  {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        this.connection = null
        if (err) return reject(err)
        return resolve()
      })
    })
}
}
module.exports =Database 