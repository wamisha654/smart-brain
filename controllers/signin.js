const handleSignin = (req, res,db,bcrypt) => {
  if(!email || !password){
    return res.status(400).json('incorrect fom');
  }
  db.select('email','hash').from('login')
    .where('email','=',req.body.email)
    .then(data=>{
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if(isValid){
        db.select('*').from('users')
         .where('email', '=', req.body.email)
         .then(user=> {
          res.json(user[0])
         })
         .catch(err=> res.status(400).json('unable to sign in'))
      }
      else{
        res.status(400).json('wrong credentials')
      }
    }) 
    .catch(err=>res.status(400).json('wrong credentials'))
}
export default{
  handleSignin:handleSignin
};
