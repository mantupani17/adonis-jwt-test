'use strict'


const BaseController = use('App/Controllers/Http/BaseController')
const PostHelpers = use('App/Helpers/Db/PostHelper')

class PostController extends BaseController{
    async createPost({request, response}){
        const res = {
            status:true,
            message:'Post added successfully!',
            data:''
        }
        try {
            const postData = request.all()
            const postmodel = {
                username:postData['username'],
                post:postData['post']
            }

            const result = await PostHelpers.createPost(postmodel)
            response.send(res)
            
        } catch (error) {
            console.log(error)
            response.send({
                status:false,
                message:error.message,
                data:''
            })
        }
    }

    async getPosts({request, response }){
        const res = {
            status:false,
            message:'No record found!',
            data:''
        }
        try {
            let postData = await PostHelpers.getAllPosts({})
            if(postData.length > 0){
                res.status=true
                res.data = postData
                res.message = ''
            }
            response.send(res)
        } catch (error) {
            console.log(error)
            response.send({
                status:false,
                message:error.message,
                data:''
            })
        }
    }

    async deletePost({request, response, params}){
        const res = {
            status:true,
            message:'Deleted successfully!',
            data:''
        }
        try {
            const postData = request.all()
            const _id = params['id']
            const where = {'_id':_id}
            const effectedRows = await PostHelpers.deletePost(where)
            response.send(res)
        } catch (error) {
            console.log(error)
            response.send({
                status:false,
                message:error.message,
                data:''
            })
        }
    }


}

module.exports = PostController
