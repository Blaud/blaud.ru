const connectionString =  process.env.MONGODB_URI || "mongodb://127.0.0.1/mydb";
const jwtKey =  process.env.JWT || "dev jwt";
module.exports = {
    mongoURI: connectionString,
    jwt: jwtKey
};