const require=(moduleName) =>{
    console.log(`Require invoked for module: ${moduleName}`)
    const id = require.resolve(moduleName);//[1]
    if(require.cache[id]){//[2]
        return require.cache[id].exports;
    }

    //모듈 메타데이터a
    const module = { //[3]
        exports:{},
        id:id
    };
    //캐시 갱신 the cache
        require.cache[id] = module; //[4]

    //모듈 로드
    loadModule(id, module, require); //[5]

    //익스포트된 변수들을 반환
    return module.exports; //[6]
}

require.cache = {};
require.resolve = (moduleName) => { 
    /*moduleName에서 모듈 ID를 확인*/
}