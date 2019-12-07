'use strict'
const MatchModel = use('App/Models/Match')


const MatchHelpers = {
    async getAllMatches(where, select, limit, skip){
        where = where || {}
        select = select || ''
        limit = limit || 10000
        skip = skip || 0
        try {
           const result = await MatchModel
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

    async createMatch(user){
        try {
            const userData = await MatchModel.create(user)
            return userData 
        } catch (error) {
            console.log(error)
            return 0
        }
    },

    async deleteMatch(where){
        try {
            await MatchModel
            .where(where)
            .delete()
            return true 
        } catch (error) {
            console.log(error)
            return false
        }
    }



}

module.exports = MatchHelpers