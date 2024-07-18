const { config } = require('dotenv');
config();

module.exports={
    //Server Config
    port: process.env.PORT,

    //DBconn
    UserDB: process.env.DB,
    PasswordDB: process.env.PasswordDB,
    ServerDB: process.env.ServerDB,
    Database: process.env.Database,
    PortDb: process.env.PortDB

}