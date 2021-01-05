//다른 종속성 로드
const dependency = require('./anotherModule');

//private함수
function log(){
    console.log(`Well done ${dependency.username}`)
}

//익스포트되어 외부에서 사용될 API
module.exports.run = () =>{
    log();
}