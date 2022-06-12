// Write your solution in this file!
const employee = Object();

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let Object = {...obj};
    Object[key] = value;
    return Object;
  }
  
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  
  function deleteFromEmployeeByKey(obj, key) {
    var newObj =  Object.assign({},obj);
    delete newObj[key];
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
  }