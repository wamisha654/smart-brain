const handleProfile = (req,res,db)=>{
	const { id } = req.params;
	let found = false;
	db.select('*').from('users').where({
    id: id
  })
    .then(users=>{
      if(users.length){
        res.json(users[0])
      }
      else{
        res.json('not found')
      }
    

  })
    .catch(err=> res.status(400).json('not found'))
	
}
export default{
  handleProfile:handleProfile
};