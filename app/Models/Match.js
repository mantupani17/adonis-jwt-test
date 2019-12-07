'use strict'
/*
|-----------------------------------------------------------
|***********************UserModel***************************
|-----------------------------------------------------------
|  user model schema
| 
| 
*/


const Model = use('Model')

class Match extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
  }
}

module.exports = Match
