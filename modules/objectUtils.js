const _ = require('lodash')

function deepCloneObject(object1) {
    return _.cloneDeep(object1);
}

function mergeObjects(object2, object1) {
    return _.merge(object2, object1);
}

module.exports = { deepCloneObject, mergeObjects }