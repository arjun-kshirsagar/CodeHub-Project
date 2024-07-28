const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://arjun:JEqskeHqJoPrfOpI@cluster0.nttxq8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})