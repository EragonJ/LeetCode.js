/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let map = {}
  let others = []
  let result = []
  
  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      if (typeof map[element] === 'undefined') {
        map[element] = []
      }
      map[element].push(element)
    }
    else {
      others.push(element)
    }
  })
    
  others.sort((a, b) => {
    return a - b
  })
    
  arr2.forEach((element) => {
    result.push(...map[element])
  })
    
  return result.concat(others)
};
