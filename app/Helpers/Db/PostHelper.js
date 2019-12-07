'use strict'
const PostModel = use('App/Models/Post')


const PostHelpers = {
    async getAllPosts(where, select, limit, skip){
        where = where || {}
        select = select || ''
        limit = limit || 10000
        skip = skip || 0
        try {
           const result = await PostModel
                .select(select)
                .where(where)
                .sort({email:1})
                .limit(limit)
                .skip(skip)
                .fetch()
           return result.toJSON()
       } catch (error) {
           console.log(error)
           return []
       }
    },

    async createPost(user){
        try {
            const userData = await PostModel.create(user)
            return userData 
        } catch (error) {
            console.log(error)
            return 0
        }
    },

    async deletePost(where){
        try {
            await PostModel
            .where(where)
            .delete()
            return true 
        } catch (error) {
            console.log(error)
            return false
        }
    }



}

module.exports = PostHelpers