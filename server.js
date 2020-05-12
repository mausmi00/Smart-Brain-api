const express = require('express');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors') 
const knex = require('knex');
const register = require('./controllers/register')
const signIn = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'mausmi909',
      database : 'smart-brain'
    }
  }); 
const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{res.json(database.users)})
app.post('/signin', (req,res) => {signIn.handleSignIn(req, res, db, bcrypt)});
app.post('/register', (req,res) => {register.handleRegister(req,res, db, bcrypt)});
app.get('/profile/:id', (req,res) => {profile.handleProfile(req.res.db)});
app.put('/image', (req, res) => {image.handleImage(req, res, db)});
app.listen(300, () =>{
    console.log('app is running on port 3000');
}
)