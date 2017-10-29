/**
 * Poi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string'
        },
        location: {
            type: 'string'
        },
        position_longitude: {
            type: 'float'
        },
        position_latitude: {
            type: 'float'
        }
    }
};
