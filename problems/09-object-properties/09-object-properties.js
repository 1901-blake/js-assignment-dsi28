/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value.
forin loop
*/
function objectProperties(someObj) {
    for (const key in someObj) {
        if (someObj.hasOwnProperty(key)) {
           console.log('name: '+ key+ '\tvalue:'+someObj[key]);            
        }
    }
}
let obj= {
    prop1: 'prop1',
    prop2: 2,
    prop3: true,
    prop4: ['41', 42, false]
}
objectProperties(obj);