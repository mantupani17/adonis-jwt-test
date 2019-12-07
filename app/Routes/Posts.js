'use strict'
const Route = use('Route')
Route 
    .group(()=>{
        Route.post('/','Api/PostController.createPost')
        Route.get('/','Api/PostController.getPosts')
        Route.get('/:id','Api/PostController.getPost')
        Route.delete('/:id','Api/PostController.deletePost')
    }).prefix('/api/post').middleware('auth')