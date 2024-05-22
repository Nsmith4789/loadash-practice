const _ = require(lodash);

function chunkArray(array1) {
    return _.chunk(array1, 2);
}

function findUniqueElements(array2) {
    return _.uniq(array2);
}

modules.export = { chunkArray, findUniqueElements };