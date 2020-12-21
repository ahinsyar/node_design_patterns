const fs = require('fs')
const cache = {}

function inconsistentRead(filename, callback){
    if(cache[filename]){
        callback(cache[filename])
    }else{
        fs.readFile(filename, 'utf8', (err, data)=>{
            cache[filename] = data
            callback(data)
        })
    }
}

function createFileReader(filename){
    const listeners = [];
    inconsistentRead(filename, value =>{
        listeners.forEach(listener => listener(value));
    })

    return {
        onDataReady: listener => listeners.push(listener)
    }
}

const reader1 = createFileReader('data.txt')
reader1.onDataReady(data =>{
    console.log('First call data: '+data)

    setTimeout(() => {console.log('타이머가 돌아 갑니다~~~~')}, 5000)

    const reader2 = createFileReader('data.txt');
    reader2.onDataReady(data =>{
        console.log('Second Call data:'+data);
    })
})