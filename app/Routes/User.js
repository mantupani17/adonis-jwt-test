'use strict'

const Route = use('Route')


Route
 .group(()=>{
        Route.get('/','Api/UserController.getUsers')
        Route.post('/','Api/UserController.createUser')
        Route.delete('/:id','Api/UserController.deleteUser')
        // Route.get('/test/test','TestController.test')
 }).prefix('/api/user')

 