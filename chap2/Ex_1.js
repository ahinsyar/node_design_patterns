//동기식
function add(a, b){
    return a+b;
}

function add(a, b, callback){
    callback(a+b);
}

console.log('before')
add(1, 2, result => console.log('result:', result))
console.log('after')

//비동기식
function addAsync(a, b, callback){
    setTimeout(() => callback(a+b), 100);
}

console.log('before')
addAsync(1, 2, result => console.log('result:', result))
console.log('after')