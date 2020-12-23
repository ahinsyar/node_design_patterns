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

//
function inconsistentReadSync(filename, callback){
    if(cache[filename]){
        callback(cache[filename])
    }else{
        fs.readFileSync(filename, 'utf8', (err, data)=>{
            cache[filename] = data
            callback(data)
        })
    }
}

//완전 비동기화
function inconsistentReadAsync(filename, callback){
    if(cache[filename]){
        process.nextTick(() => callback(cache[filename]))
    }else{
        fs.readFile(filename, 'utf8', (err, data)=>{
            cache[filename] = data
            callback(data)
        })
    }
}

function createFileReader(filename){
    const listeners = [];
    inconsistentReadAsync(filename, value =>{
        listeners.forEach(listener => listener(value));
    })

    return {
        onDataReady: listener => listeners.push(listener)
    }
}

//비동기 방식으로 동작했을때 2번째를 읽어 오지 못함
//2번째를 읽기 전에 프로그램이 끝나버려서 실행 시간에 맞추지 못하기 때문
//하여 위에 sync를 붙인 동기 방식으로 변경 함
//하지만 동기 방식으로 변경하면 파일을 읽은 후에 다음 명령을 실행 하므로
//프로그램의 성능이 느려짐
const reader1 = createFileReader('data.txt')
reader1.onDataReady(data =>{
    console.log('First call data: '+data)

    setTimeout(() => {console.log('타이머가 돌아 갑니다~~~~')}, 5000)

    const reader2 = createFileReader('data.txt');
    reader2.onDataReady(data =>{
        console.log('Second Call data: '+data);
    })
})