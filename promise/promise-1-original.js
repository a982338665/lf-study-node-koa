
//基础回调函数 取数据
const fs = require("fs");

fs.readFile('../package.json',(err,data) => {
    if(err){
        return console.log(err);
    }
    data = JSON.parse(data);
    console.log(data.name);
});