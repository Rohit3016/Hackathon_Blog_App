const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router() 

router.get('/', (request, response) => {
  const statement = `select id, title, description from categories;`
  db.pool.query(statement, (error, categories) => {
    if(error){
      response.send(utils.createErrorResult(error))
  }else{
      response.send(utils.createSuccessResult(categories))
  }
  })
})


router.post('/add', (request, response) => {
  const { title, description} = request.body
  const statement = `insert into categories (title, description) values (?, ?)`
  db.pool.execute(statement, [title, description], (error, categories) => {
    if(error){
      response.send(utils.createErrorResult(error))
  }else{
      response.send(utils.createSuccessResult(categories))
  }
  })
})

router.put('/update',(request,response)=>{
    const{title,description,id}=request.body
    const statement=`update categories set title=? ,description=? where id=?`
    db.pool.execute(statement, [title,description,id], (error, categories) => {
      if(error){
        response.send(utils.createErrorResult(error))
    }else{
        response.send(utils.createSuccessResult(categories))
    }
    })
  })
  
  router.delete('/delete', (request, response) => {
    const{id}=request.body
    const statement = `delete  from categories where id=?`
    db.pool.query(statement, [id],(error, categories) => {
      if(error){
        response.send(utils.createErrorResult(error))
    }else{
        response.send(utils.createSuccessResult(categories))
    }
    })
  })


module.exports = router