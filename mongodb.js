const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const OblectID = mongodb.OblectID

const connectionURL = "mongodb://127.0.0.1:27017"
const dbName = "task-manager"

/*connecting to dB*/
MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
    if(err){return console.log("unable to connect")}
    console.log("connected")
    const db = client.db(dbName)
    /**INSERT ONE **/
    // db.collection('users').insertOne({
    //     name: 'grvcodes',
    //     age:18
    // },(err,res)=>{
    //     if(err){return console.log("could not add details")}
    //     console.log(res.ops)
    // })
    /**INSERT MANY**/
    // db.collection('users').insertMany([
    //     {
    //         name: 'John Doe',
    //         age:28
    //     },
    //     {
    //         name:'Roy',
    //         age: 12
    //     }
    // ],(err,res)=>{
    //     if(err){return console.log('unable to add details')}
    //     console.log(res.ops)
    // })
    /** TASK **/
    // db.collection('tasks').insertMany([
    //     {
    //         description:'learn CRUD',
    //         completed: true
    //     },
    //     {
    //         description:'study Database and OS for exams',
    //         completed: false
    //     },
    //     {
    //         description: 'start week 3 of ML',
    //         completed: false
    //     }
    // ],(err,res)=>{
    //     if(err){return console.log('unable too add details')}
    //     console.log(res.ops)
    // })
    /**>FIND<**/
    db.collection('tasks').findOne({
        completed:false
    },(err,res)=>{
        if(err){return console.log('unable too add details')}
        console.log(res)
    })
    /**>UPDATE<**/
    // db.collection('users').updateOne({
    //     name: 'grvcodes'
    // },{
    //     $set:{
    //      name : 'Gaurav'
    //     }
    // }).then(result=>console.log(result)).catch(err=>console.log(err))
    // db.collection('users').updateOne({
    //     name: 'Gaurav'
    // },{
    //     $inc:{
    //      age : 1
    //     }
    // }).then(result=>console.log(result)).catch(err=>console.log(err))
    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // })
    // .then(res=>console.log(res.modifiedCount))
    // .catch(err=>console.log(err))
    /**>DELETE<**/
    db.collection('tasks').deleteMany({
        completed: true
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
 })
 
