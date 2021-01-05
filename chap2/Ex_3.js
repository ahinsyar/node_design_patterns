const fs = require('fs');
function readJSON(filename, callback){
    fs.readFile(filename, 'utf8', (err, data)=>{
        let parsed;
        if(err)
        //오류를 전달하고 현재 함수를 종료
        return callback(err);

        try{
            //파일이 내용을 분석
            parsed = JSON.parse(data);
        }catch(err){
            //에러를 catch
            return callback(err)
        }
        //에러가 없으면 데이터를 전달
        callback(null, parsed)
    })
}

readJSON('nonJSON.txt', err => console.log(err))