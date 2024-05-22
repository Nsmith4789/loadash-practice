const _ = require(lodash)

function deepClonedObject(object1) {
    return _.cloneDeep(object1);
}

function mergeObjects(object2) {
    return _.merge(object2);
}

modules.export = { deepClonedObject, mergeObjects }