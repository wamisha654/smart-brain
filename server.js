import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import Knex from "knex";
import register from "./controllers/register.js";
import signin from "./controllers/signin.js";
import profile from "./controllers/profile.js";
import image from "./controllers/image.js";




const db = Knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'test',
    database : 'smart'
  }
});

db.select('*').from('users').then(data=>{
 console.log(data);
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=> {
	res.json(database.users);
})

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})
app.post('/register', (req,res) =>{register.handleRegister(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})
app.put('/image',(req,res)=>{image.handleImange(req,res,db)})
app.listen(3001, ()=> {
	console.log('appis running on port 3001');
})

 