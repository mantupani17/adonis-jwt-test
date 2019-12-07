'use strict'
const Route = use('Route')
Route.group(()=>{
    Route.post('/login','Api/AuthController.login')
    Route.get('/logout','Api/AuthController.logout')
    Route.post('/jwt-login' , 'Api/AuthController.jwtLogin')
 }).prefix('/api/auth/user')