'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class District extends Model {
    /**
     * Set a schema name personalized
     */
    static dbSchemaName () {
        return "build"
    }

    builds () {
        return this.hasMany('App/Models/Build')
    }
}

module.exports = District
