
//promise 当前 使用同步代码完成异步操作 8.x版本后
const fs = require("fs");
const util = require("util");
//包装
const readAsync = util.promisify(fs.readFile);


async function init() {
    try{
        let data = await readAsync('../package.json');
        data = JSON.parse(data);
        console.log(data.name);
    }catch (e) {
        console.log(e);
    }
}

init();
