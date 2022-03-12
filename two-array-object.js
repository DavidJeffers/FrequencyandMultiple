// add whatever parameters you deem necessary & write docstring
// takes in two arrays (keys) (values)
// arrays should be same length
// if second array less than first fill values with null
// if first array less than second ignore rest of values
// return object of key value pars

/**
 *  accepts two arrays of keys and values
 * @param {array} keys 
 * @param {array} values 
 * @returns object of key value pairs
 */
function twoArrayObject(keys, values) {
    let result = {};

    for (let i = 0; i < keys.length; i++) {

        if (values[i] == undefined) {
            result[keys[i]] = null;
        } else if (!keys[i]) {
            return result;
        } else {
            result[keys[i]] = values[i];
        }
    }
    console.log(result)
    return result;

}
