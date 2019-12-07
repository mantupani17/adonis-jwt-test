'use strict'


const MatchHelpers = use('App/Helpers/Db/MatchesHelper')
const BaseController = use('App/Controllers/Http/BaseController')

class MatchController extends BaseController{
   
    async createMatch({request, response}){
        const Hash = use('Hash')
        const res = {
            status : true,
            message: 'Users added successfully',
            data:''
        }
        try {
            const postData = request.all()
            const usermodel = {}
            usermodel.fname = postData['fname']
            usermodel.lname = postData['lname']
            usermodel.email = postData['email']
            usermodel.password = postData['password']
            const userId = await MatchHelpers.createMatch(usermodel)
            if(userId == ''){
                res.status = false
                res.message = 'Sorry, The data is not register.' 
            }
            response.send(res);
        } catch (error) {
            console.log(error)
            response.send({
                status:false,
                message:error.message,
                data:'',
            });
        }
    }

    async getMatches({request, response, params }){
        const res = {
            status : true,
            message: 'Users are',
            data:''
        }
        try {
            const getData = request.all()
            const where = {}
            if(typeof getData.id != 'undefined' && getData.id != ''){
                where._id = await this.toObjectId('5d3b14183676800b54cf7b47')
            }
            const result = await UserHelpers.getAllUsers(where, '');
            if(result == undefined){
                res.status = false;
                res.message = 'record not found'
            }else{
                res.data = result
                res.message=''
            }
          
           response.send(res)
       } catch (error) {
           console.log(error)
           response.send({
               message: 'OOPS, ERROR',
               status: false,
               data : []
           })
       }
    }

    async deleteMatches({request, response, params }){
        const res = {
            status : true,
            message: 'Delete Successfuly',
            data:''
        }
        try {
            const getData = request.all()
            const where = {}
            if(typeof getData.id != 'undefined' && getData.id != ''){
                where._id = await this.toObjectId('5d3b14183676800b54cf7b47')
            }
            const result = await UserHelpers.deleteUser(where);
            if(result == false){
                res.status = false;
                res.message = 'record not found'
            }else{
                res.data = result
                res.message=''
            }
          
           response.send(res)
       } catch (error) {
           console.log(error)
           response.send({
               message: 'OOPS, ERROR',
               status: false,
               data : []
           })
       }
    }

}

module.exports = MatchController
