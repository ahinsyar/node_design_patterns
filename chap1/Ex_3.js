let obj = {};
const map = new WeakMap();
map.set(obj, {key:'some_value'});
console.log(map.get(obj));
obj = undefined;

let obj1 = {key: 'val1'}
let obj2 = {key: 'val2'}
const set = new WeakSet([obj1, obj2]);
console.log(set.has(obj1))
obj1 = undefined;
console.log(set.has(obj1))