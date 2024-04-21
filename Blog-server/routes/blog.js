const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router() 

router.post('/add',(request,response)=>{
    const { title,contents,user_id,category_id} = request.body
    const statement=`insert into blogs(title,contents,user_id,category_id) values(?,?,?,?);`
    db.pool.execute(statement, [title,contents,user_id,category_id], (error, blogs) => {
        if(error){
            console.log(statement)
            console.log(title,contents,user_id,category_id)
          response.send(utils.createErrorResult(error))
      }else{
          response.send(utils.createSuccessResult(blogs))
      }
      })

})
router.get('/all',(request,response)=>{
    // const {id} = request.body
    const statement=`select id,title,contents from blogs`
    db.pool.execute(statement, (error, blogs) => {
        if(error){
          response.send(utils.createErrorResult(error))
      }else{
          response.send(utils.createSuccessResult(blogs))
      }
      })

})

router.get('/my',(request,response)=>{
    const {id} = request.headers
    // console.log(id)
    const statement=`select id,title,contents from blogs where user_id = ?`
    db.pool.execute(statement, [id], (error, blogs) => {
        if(error){
          response.send(utils.createErrorResult(error))
          
      }else{
          response.send(utils.createSuccessResult(blogs))
        //   console.log(statement)
      }
      })

})
router.get('/search',(request,response)=>{
    const {title} = request.headers
    const statement=`select id,title,contents from blogs where title = ?`
    db.pool.execute(statement, [title], (error, blogs) => {
        if(error){
          response.send(utils.createErrorResult(error))
      }else{
          response.send(utils.createSuccessResult(blogs))
      }
      })

})
router.put('/update',(request,response)=>{
    const {id} = request.headers
    const {title,contents} = request.body
    const statement=`update blogs set title = ? ,contents = ? where id = ?`
    db.pool.execute(statement, [title,contents,id], (error, blogs) => {
        console.log(id,title,contents)
        if(error){
          response.send(utils.createErrorResult(error))
      }else{
          response.send(utils.createSuccessResult(blogs))
      }
      })

})
router.delete('/delete',(request,response)=>{
    const {id} = request.headers
    const statement=`delete from blogs where id = ?`
    db.pool.execute(statement, [id], (error, blogs) => {
        if(error){
          response.send(utils.createErrorResult(error))
      }else{
          response.send(utils.createSuccessResult(blogs))
      }
      })

})

module.exports = router