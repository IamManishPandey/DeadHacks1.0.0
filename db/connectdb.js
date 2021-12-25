// //Connecting Mongo Db With the server using Mongoose ----------------------------------------------------------------
const mongoose = require( 'mongoose' );
//mongodb://localhost:27017/HackerUsers
const DB = 'mongodb+srv://root:Rits7275Rits@cluster0.qvdvm.mongodb.net/IamDeadHacker?retryWrites=true&w=majority'
mongoose.connect( DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
} ).then( () => {
    console.log( ` Connected to MongoDB---` )
} ).catch( ( err ) => {
    console.log( `MongoDB Error!!! connection` )
} )

///This is for LOcal DB

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://<ritesh>:<Rits7275Rits>@cluster0.qvdvm.mongodb.net/user?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
